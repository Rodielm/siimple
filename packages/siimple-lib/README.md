[![siimple](../../header.svg)](https://www.siimple.xyz)

# siimple-lib

> Core scss library for **siimple**.

[![npm](https://img.shields.io/npm/v/siimple-lib.svg?style=flat-square)](https://www.npmjs.com/package/siimple-lib)
[![npm](https://img.shields.io/npm/dt/siimple-lib.svg?style=flat-square)](https://www.npmjs.com/package/siimple-lib)
[![npm](https://img.shields.io/npm/l/siimple-lib.svg?style=flat-square)](https://github.com/siimple/siimple)

**siimple-lib** is the core scss library for the siimple ecosystem.


## Installation

Install **siimple-lib** using npm:

```bash
$ npm install --save siimple-lib
```


## Usage

Import this library as a module in your `.scss` files using the [@use rule](https://sass-lang.com/documentation/at-rules/use). There is a basic example:

```scss
@use "siimple-lib" as siimple;

.button {
    background-color: siimple.$primary;
    color: siimple.$white;
}
```

You can override the default variables defined in the library. Check the [configuring modules](https://sass-lang.com/documentation/at-rules/use#configuring-modules) section of the Sass documentation.

```scss
@use "siimple-lib" as siimple with (
    $primary: #000000
);

.button {
    background-color: siimple.$primary;
    color: siimple.$white;
}
```


## Bugs and new features

Found any bug? Have you a feature request? Please make sure to read our [contributing guidelines](https://github.com/siimple/siimple/blob/develop/CONTRIBUTING.md) and search for existing or similar issues. 
If your problem or idea is not addressed yet, please feel free to open a new issue!

## Questions 

For questions and support, please use our [community chat](https://github.com/siimple/siimple/discussions) on **GitHub Discussions**. 
You can also follow [@siimplecss on Twitter](https://twitter.com/siimplecss) to get updates on **siimple** development.

## License

Released under the [MIT LICENSE](../../LICENSE).

