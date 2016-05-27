"use strict";

module.exports = {
  "rules": {
    // Enforces getter/setter pairs in objects
    "accessor-pairs": 0,
    // treat var statements as if they were block scoped
    "block-scoped-var": 0,
    // specify the maximum cyclomatic complexity allowed in a program
    "complexity": 0,
    // require return statements to either always or never specify values
    "consistent-return": 0,
    // specify curly brace conventions for all control statements
    "curly": 1,
    // require default case in switch statements
    "default-case": 0,
    // enforces consistent newlines before or after dots
    "dot-location": 0,
    // encourages use of dot notation whenever possible
    "dot-notation": 1,
    // require the use of === and !==
    "eqeqeq": 0,
    // make sure for-in loops have an if statement
    "guard-for-in": 0,
    // disallow the use of alert, confirm, and prompt
    "no-alert": 0,
    // disallow use of arguments.caller or arguments.callee
    "no-caller": 1,
    // disallow lexical declarations in case clauses
    "no-case-declarations": 0,
    // disallow division operators explicitly at beginning of regular expression
    "no-div-regex": 0,
    // disallow else after a return in an if
    "no-else-return": 0,
    // disallow use of empty destructuring patterns
    "no-empty-pattern": 0,
    // disallow comparisons to null without a type-checking operator
    "no-eq-null": 0,
    // disallow use of eval()
    "no-eval": 1,
    // disallow adding to native types
    "no-extend-native": 1,
    // disallow unnecessary function binding
    "no-extra-bind": 1,
    // disallow fallthrough of case statements
    "no-fallthrough": 1,
    // disallow the use of leading or trailing decimal points in numeric literals
    "no-floating-decimal": 0,
    // disallow the type conversions with shorter notations
    "no-implicit-coercion": 0,
    // disallow use of eval()-like methods
    "no-implied-eval": 0,
    // disallow this keywords outside of classes or class-like objects
    "no-invalid-this": 1,
    // disallow usage of __iterator__ property
    "no-iterator": 0,
    // disallow use of labeled statements
    "no-labels": 1,
    // disallow unnecessary nested blocks
    "no-lone-blocks": 1,
    // disallow creation of functions within loops
    "no-loop-func": 1,
    // disallow the use of magic numbers
    "no-magic-numbers": 0,
    // disallow use of multiple spaces
    "no-multi-spaces": 0,
    // disallow use of multiline strings
    "no-multi-str": 0,
    // disallow reassignments of native objects
    "no-native-reassign": 1,
    // disallow use of new operator for Function object
    "no-new-func": 1,
    // disallows creating new instances of String,Number, and Boolean
    "no-new-wrappers": 1,
    // disallow use of new operator when not part of the assignment or comparison
    "no-new": 1,
    // disallow use of octal escape sequences in string literals, such as
    // var foo = "Copyright \251";
    "no-octal-escape": 0,
    // disallow use of (old style) octal literals
    "no-octal": 0,
    // disallow reassignment of function parameters
    "no-param-reassign": 1,
    // disallow use of process.env
    "no-process-env": 0,
    // disallow usage of __proto__ property
    "no-proto": 1,
    // disallow declaring the same variable more then once
    "no-redeclare": 1,
    // disallow use of assignment in return statement
    "no-return-assign": 1,
    // disallow use of `javascript:` urls.
    "no-script-url": 0,
    // disallow comparisons where both sides are exactly the same
    "no-self-compare": 1,
    // disallow use of comma operator
    "no-sequences": 1,
    // restrict what can be thrown as an exception
    "no-throw-literal": 0,
    // disallow usage of expressions in statement position
    "no-unused-expressions": 1,
    // disallow unnecessary .call() and .apply()
    "no-useless-call": 1,
    // disallow unnecessary concatenation of literals or template literals
    "no-useless-concat": 1,
    // disallow use of void operator
    "no-void": 1,
    // disallow usage of configurable warning terms in comments: e.g. todo
    "no-warning-comments": 1,
    // disallow use of the with statement
    "no-with": 1,
    // require use of the second argument for parseInt()
    "radix": 1,
    // requires to declare all vars on top of their containing scope
    "vars-on-top": 0,
    // require immediate function invocation to be wrapped in parentheses
    "wrap-iife": 1,
    // require or disallow Yoda conditions
    "yoda": 0
  }
};
