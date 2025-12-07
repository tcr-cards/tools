// To parse this data:
//
//   import { Convert, Pokecardex } from "./file";
//
//   const pokecardex = Convert.toPokecardex(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Pokecardex {
  versions: Version[];
  versions_of_cards: Array<string[]>;
  groupes_cartes: Array<number[]>;
  blocs: Bloc[];
  series: Series[];
  ajouts: Array<number[]>;
  ajouts_grades: any[];
  cartes: Carte[];
}

export interface Bloc {
  i: number;
  f: string;
  s: number;
  u?: string;
}

export interface Carte {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: string;
  h: string;
  i: number;
  j: string;
  k: number | null;
  de: null | string;
  g: string;
}

export interface Series {
  i: number;
  f: string;
  u?: string;
  c: string;
  n: number;
  t: number;
  a: A;
  b: number;
  s: number;
  r: number;
  rf: number;
  o: number;
}

export enum A {
  Deck = "DECK",
  Mini = "MINI",
  Primary = "PRIMARY",
  Promo = "PROMO",
  Secondary = "SECONDARY",
}

export interface Version {
  i: number;
  f: string;
  e: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toPokecardex(json: string): Pokecardex {
    return cast(JSON.parse(json), r("Pokecardex"));
  }

  public static pokecardexToJson(value: Pokecardex): string {
    return JSON.stringify(uncast(value, r("Pokecardex")), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ""): never {
  const prettyTyp = prettyTypeName(typ);
  const parentText = parent ? ` on ${parent}` : "";
  const keyText = key ? ` for key "${key}"` : "";
  throw Error(
    `Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`
  );
}

function prettyTypeName(typ: any): string {
  if (Array.isArray(typ)) {
    if (typ.length === 2 && typ[0] === undefined) {
      return `an optional ${prettyTypeName(typ[1])}`;
    } else {
      return `one of [${typ
        .map((a) => {
          return prettyTypeName(a);
        })
        .join(", ")}]`;
    }
  } else if (typeof typ === "object" && typ.literal !== undefined) {
    return typ.literal;
  } else {
    return typeof typ;
  }
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(
  val: any,
  typ: any,
  getProps: any,
  key: any = "",
  parent: any = ""
): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key, parent);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {}
    }
    return invalidValue(typs, val, key, parent);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(
      cases.map((a) => {
        return l(a);
      }),
      val,
      key,
      parent
    );
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue(l("Date"), val, key, parent);
    }
    return d;
  }

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any
  ): any {
    if (val === null || typeof val !== "object" || Array.isArray(val)) {
      return invalidValue(l(ref || "object"), val, key, parent);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key)
        ? val[key]
        : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, key, ref);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key, ref);
      }
    });
    return result;
  }

  if (typ === "any") return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val, key, parent);
  }
  if (typ === false) return invalidValue(typ, val, key, parent);
  let ref: any = undefined;
  while (typeof typ === "object" && typ.ref !== undefined) {
    ref = typ.ref;
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === "object") {
    return typ.hasOwnProperty("unionMembers")
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty("arrayItems")
        ? transformArray(typ.arrayItems, val)
        : typ.hasOwnProperty("props")
          ? transformObject(getProps(typ), typ.additional, val)
          : invalidValue(typ, val, key, parent);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== "number") return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
  return { literal: typ };
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  Pokecardex: o(
    [
      { json: "versions", js: "versions", typ: a(r("Version")) },
      { json: "versions_of_cards", js: "versions_of_cards", typ: a(a("")) },
      { json: "groupes_cartes", js: "groupes_cartes", typ: a(a(0)) },
      { json: "blocs", js: "blocs", typ: a(r("Bloc")) },
      { json: "series", js: "series", typ: a(r("Series")) },
      { json: "ajouts", js: "ajouts", typ: a(a(0)) },
      { json: "ajouts_grades", js: "ajouts_grades", typ: a("any") },
      { json: "cartes", js: "cartes", typ: a(r("Carte")) },
    ],
    false
  ),
  Bloc: o(
    [
      { json: "i", js: "i", typ: 0 },
      { json: "f", js: "f", typ: "" },
      { json: "s", js: "s", typ: 0 },
    ],
    false
  ),
  Carte: o(
    [
      { json: "a", js: "a", typ: 0 },
      { json: "b", js: "b", typ: 0 },
      { json: "c", js: "c", typ: 0 },
      { json: "d", js: "d", typ: 0 },
      { json: "e", js: "e", typ: 0 },
      { json: "f", js: "f", typ: "" },
      { json: "h", js: "h", typ: "" },
      { json: "i", js: "i", typ: 0 },
      { json: "j", js: "j", typ: "" },
      { json: "k", js: "k", typ: u(0, null) },
      { json: "de", js: "de", typ: u(null, "") },
      { json: "g", js: "g", typ: "" },
    ],
    false
  ),
  Series: o(
    [
      { json: "i", js: "i", typ: 0 },
      { json: "f", js: "f", typ: "" },
      { json: "c", js: "c", typ: "" },
      { json: "n", js: "n", typ: 0 },
      { json: "t", js: "t", typ: 0 },
      { json: "a", js: "a", typ: r("A") },
      { json: "b", js: "b", typ: 0 },
      { json: "s", js: "s", typ: 0 },
      { json: "r", js: "r", typ: 0 },
      { json: "rf", js: "rf", typ: 0 },
      { json: "o", js: "o", typ: 0 },
    ],
    false
  ),
  Version: o(
    [
      { json: "i", js: "i", typ: 0 },
      { json: "f", js: "f", typ: "" },
      { json: "e", js: "e", typ: "" },
    ],
    false
  ),
  A: ["DECK", "MINI", "PRIMARY", "PROMO", "SECONDARY"],
};
