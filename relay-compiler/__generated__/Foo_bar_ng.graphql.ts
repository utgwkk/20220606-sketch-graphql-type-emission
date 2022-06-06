/**
 * @generated SignedSource<<a08a5341235147d5d4897b14da90d835>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Foo_bar_ng$data = {
  readonly barField: string;
  readonly __typename: "Bar1";
  readonly bar1Field?: string;
  readonly bar2Field?: string;
  readonly " $fragmentType": "Foo_bar_ng";
};
export type Foo_bar_ng$key = {
  readonly " $data"?: Foo_bar_ng$data;
  readonly " $fragmentSpreads": FragmentRefs<"Foo_bar_ng">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Foo_bar_ng",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "barField",
      "storageKey": null
    },
    {
      "kind": "InlineFragment",
      "selections": [
        (v0/*: any*/),
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

(node as any).hash = "3ac5e4d74c12c52c56578d7f294beb90";

export default node;
