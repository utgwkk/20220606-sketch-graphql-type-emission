/**
 * @generated SignedSource<<d6e9de43477a3766b6f6685e725e62df>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Foo_foo_ng2$data = {
  readonly id: string;
  readonly bar: {
    readonly barField: string;
    readonly __typename: "Bar1";
    readonly bar1Field?: string;
    readonly bar2Field?: string;
  };
  readonly " $fragmentType": "Foo_foo_ng2";
};
export type Foo_foo_ng2$key = {
  readonly " $data"?: Foo_foo_ng2$data;
  readonly " $fragmentSpreads": FragmentRefs<"Foo_foo_ng2">;
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
  "name": "Foo_foo_ng2",
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
      "storageKey": null
    }
  ],
  "type": "Foo",
  "abstractKey": null
};
})();

(node as any).hash = "416757e23699fa1ff0c610401c3b0bd4";

export default node;
