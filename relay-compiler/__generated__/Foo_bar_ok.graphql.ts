/**
 * @generated SignedSource<<098416b740a7d55856a0cd05e533f461>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Foo_bar_ok$data = {
  readonly __typename: "Bar1";
  readonly barField: string;
  readonly bar1Field: string;
  readonly " $fragmentType": "Foo_bar_ok";
} | {
  readonly __typename: "Bar2";
  readonly barField: string;
  readonly bar2Field: string;
  readonly " $fragmentType": "Foo_bar_ok";
} | {
  // This will never be '%other', but we need some
  // value in case none of the concrete values match.
  readonly __typename: "%other";
  readonly " $fragmentType": "Foo_bar_ok";
};
export type Foo_bar_ok$key = {
  readonly " $data"?: Foo_bar_ok$data;
  readonly " $fragmentSpreads": FragmentRefs<"Foo_bar_ok">;
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
  "name": "Foo_bar_ok",
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
  "type": "Bar",
  "abstractKey": "__isBar"
};
})();

(node as any).hash = "bbd05cd6e6ea8fa1dd7c5aa8ac3c1cac";

export default node;
