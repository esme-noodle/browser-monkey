# Change Log

## [Unreleased]
### Added
- synchronous tests [#59] [@joshski]  
- framework specific mounting [#54] [@dereke]

[#59]: https://github.com/featurist/browser-monkey/issues/59
[#54]: https://github.com/featurist/browser-monkey/issues/54
[#joshski]: https://github.com/joshski
[#dereke]: https://github.com/dereke

## [2.3.0] - 2017-03-09
### Changed
- updated debug module (fixes debug in electron-mocha) [@artemave]

[#artemave]: https://github.com/artemave

## [2.2.1] - 2017-03-07
### Changed
- updated jQuery to 3.1 [@dereke]
- remove use of removed jQuery APIs [@dereke]

[#dereke]: https://github.com/dereke

## [2.2.0] - 2017-02-27
### Added
- shouldFind API [@joshski]
- shouldHave to support array of attributes [@dereke]
- select(string) to simplify select API [@joshski]

[#joshski]: https://github.com/joshski
[#dereke]: https://github.com/dereke

## [2.0.0] - 2017-02-09
### Added
- allow timeout to be set from ENV variable [@dereke]
- option to set jQuery implementation [@dereke]
- firefox, safari, IE and edge support [@dereke]
- option to simulate focus behaviour on IE [@refractalize]
- semantic finders [@joshski]

[#dereke]: https://github.com/dereke
[#joshski]: https://github.com/joshski
[#refractalize]: https://github.com/refractalize

### Changed
- improved errors when asserting arrays of values [@dereke]
- stacktraces that show where the error originated [@dereke]
- better support for clicking checkboxes [@refractalize]
- shouldHave({text: ''}) checks for empty text [@adiel]
- improved error reporting of non matching CSS selectors [@adiel]

[#dereke]: https://github.com/dereke
[#refractalize]: https://github.com/refractalize
[#adiel]: https://github.com/adiel
