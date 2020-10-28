/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Start core database.  Note that, unlike most of the
 * rest of the files in the core/ directory, this is hand-written.
 *
 * It assumed this file will be used when starting a full database
 * dump; for that, a file in database/, generated by dump, will
 * restart listeners intead.
 */

// Configuration.
$.servers.http.subdomains = false;
$.servers.http.protocol = 'http:';
$.servers.http.host = 'localhost:8080';

// Set up.
$.system.onStartup();

// Tidy up.
$.clock.movable = true;
$.clock.moveTo($.startRoom);
$.clock.movable = false;

$.tutorial.moveTo($.startRoom);
$.tutorial.reset();

$.pot.moveTo($.startRoom);
$.pot.stage = 0;
$.seed.moveTo($.startRoom);
$.thrower.moveTo($.startRoom);

$.cage.moveTo($.physicals['Genetics Lab']);

$.assistant.moveTo($.startRoom);


