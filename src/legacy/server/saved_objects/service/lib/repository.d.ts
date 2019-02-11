/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { BaseOptions, SavedObject } from '../saved_objects_client';

export interface SavedObjectsRepositoryOptions {
  index: string | string[];
  mappings: unknown;
  callCluster: unknown;
  schema: unknown;
  serializer: unknown;
  migrator: unknown;
  onBeforeWrite: unknown;
}

export declare class SavedObjectsRepository {
  // ATTENTION: this interface is incomplete

  public get: (type: string, id: string, options?: BaseOptions) => Promise<SavedObject>;
  public incrementCounter: (
    type: string,
    id: string,
    counterFieldName: string,
    options?: BaseOptions
  ) => Promise<SavedObject>;

  constructor(options: SavedObjectsRepositoryOptions);
}