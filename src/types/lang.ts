import { LanguageName } from "@uiw/codemirror-extensions-langs"

export class Extension {
	readonly name: string;
	readonly ext: LanguageName;

	constructor(name: string, ext: LanguageName) {
		this.name = name;
		this.ext = ext;
	}
}

export const Extensions = {
	c: new Extension("C", "c"),
	clojure: new Extension("Clojure", "clojure"),
	cmake: new Extension("CMake", "cmake"),
	coffeescript: new Extension("CoffeeScript", "coffeescript"),
	cpp: new Extension("C++", "cpp"),
	csharp: new Extension("C#", "csharp"),
	d: new Extension("D", "d"),
	dart: new Extension("Dart", "dart"),
	erlang: new Extension("Erlang", "erlang"),
	fortran: new Extension("Fortran", "fortran"),
	go: new Extension("Go", "go"),
	groovy: new Extension("Groovy", "groovy"),
	haskell: new Extension("Haskell", "haskell"),
	java: new Extension("Java", "java"),
	javascript: new Extension("JavaScript", "javascript"),
	json: new Extension("JSON", "json"),
	julia: new Extension("Julia", "julia"),
	kotlin: new Extension("Kotlin", "kotlin"),
	lua: new Extension("Lua", "lua"),
	objectivec: new Extension("Objective-C", "objectiveC"),
	objectivecpp: new Extension("Objective-C", "objectiveCpp"),
	pascal: new Extension("Pascal", "pascal"),
	perl: new Extension("Perl", "perl"),
	php: new Extension("PHP", "php"),
	python: new Extension("Python", "python"),
	r: new Extension("R", "r"),
	ruby: new Extension("Ruby", "ruby"),
	rust: new Extension("Rust", "rust"),
	sas: new Extension("SAS", "sas"),
	scala: new Extension("Scala", "scala"),
	scheme: new Extension("Scheme", "scheme"),
	shell: new Extension("Shell", "shell"),
	smalltalk: new Extension("Smalltalk", "smalltalk"),
	sql: new Extension("SQL", "sql"),
	swift: new Extension("Swift", "swift"),
	tcl: new Extension("Tcl", "tcl"),
	text: new Extension("Text", "textile"),
	typescript: new Extension("TypeScript", "typescript"),
	tsx: new Extension("TypeScript TSX", "tsx"),
	vb: new Extension("VB", "vb"),
	verilog: new Extension("Verilog", "verilog"),
	vhdl: new Extension("VHDL", "vhdl"),
	xml: new Extension("XML", "xml"),
	jsx: new Extension("JavaScript JSX", "jsx")
};

export const ExtensionList = Object.values(Extensions);
