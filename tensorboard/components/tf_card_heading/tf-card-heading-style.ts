/* Copyright 2017 The TensorFlow Authors. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
==============================================================================*/
import {html} from '@polymer/polymer';

const template = html`
  <dom-module id="tf-card-heading-style">
    <template>
      <style>
        figcaption {
          width: 100%;
        }

        /** Horizontal line of labels. */
        .heading-row {
          margin-top: -4px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }

        /** Piece of text in the figure caption. */
        .heading-label {
          flex-grow: 1;
          margin-top: 4px;
          max-width: 100%;
          word-wrap: break-word;
        }

        /** Makes label show on the right. */
        .heading-right {
          flex-grow: 0;
        }
      </style>
    </template>
  </dom-module>
`;

document.head.appendChild(template.content);