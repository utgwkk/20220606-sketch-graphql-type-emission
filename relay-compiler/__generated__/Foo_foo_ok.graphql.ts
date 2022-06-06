/**
 * @generated SignedSource<<237f733ff2e334880254b2d037871cac>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Foo_foo_ok$data = {
  readonly id: string;
  readonly bar: {
    readonly __typename: "Bar1";
    readonly barField: string;
    readonly bar1Field: string;
  } | {
    readonly __typename: "Bar2";
    readonly barField: string;
    readonly bar2Field: string;
  } | {
    // This will never be '%other', but we need some
    // value in case none of the concrete values match.
    readonly __typename: "%other";
  };
  readonly " $fragmentType": "Foo_foo_ok";
};
export type Foo_foo_ok$key = {
  readonly " $data"?: Foo_foo_ok$data;
  readonly " $fragmentSpreads": FragmentRefs<"Foo_foo_ok">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "barField",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Foo_foo_ok",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": null,
      "kind": "LinkedField",
      "name": "bar",
      "plural": false,
      "selections": [
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "bar1Field",
              "storageKey": null
            }
          ],
          "type": "Bar1",
          "abstractKey": null
        },
        {
          "kind": "InlineFragment",
          "selections": [
            (v0/*: any*/),
            (v1/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "bar2Field",
              "storageKey": null
            }
          ],
          "type": "Bar2",
          "abstractKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Foo",
  "abstractKey": null
};
})();

(node as any).hash = "76b44ac974850c6580f019c149dba29b";

export default node;
