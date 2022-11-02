========================================================
value -> anything that can be assign in a variable such as string, bool, int, etc and has all properties method. Every value has a type
======================================================
ITS BETTER TO AVOID 'ANY' TYPE INSIDE THE APP
=======================================================
A. Type
Easy way to refer to the different properties + functions that a value has


B. In typescript we have 2 types
1. Primitives type -> number, string, boolean, symbol, void, null, undefined (basic type)
2. Object types    -> function, classes, arrays, objects (we created this)


C. Why types is matter?
1. Types are used by te typescript compiler to analyze our code for errors.
2. Types allow other engineers to understand what values are flowing around our codebase


D. Where do we use types?
We use them everywhere


E. Type Annotations (manual system)
- Definition -> Code we add to tell typescript what type of value a variable will refer to (we (developers) do it manually)
- when to use -> CHECK ON 'variable.ts' when to use comment
- for function -> Code we add to tell Typescript what type of arguments a function will receive and waht type of values it will return


F. Type Inference (automatic system)
- Definition -> Typescript tries to figure out what type of value a variable refers to (Typescript do it for us)
- Rule -> If declaration and initialization are on the same line, Typescript will figure out the type of variable for us. Example =
                        ========================================
                        const color = 'red';
                        const color -> variable declaration
                        'red'       -> variable initialization
                        =========================================
- when to use -> ALWAYS
- for functions -> Typescript to figure out what type of value a function will return


================================================================
A. Typed arrays
Arrays where each element is some consistent type of value (only string, or only array or etc). can add another but dont forget to give the annotation


B. Why do we care?
1. CHECK ON 'array.ts' why do we care comment line


C. When to use this
Any time we need to represent a collection of records with some arbitrary sort order

===========================================================================
A. Tuples
Array-like structure where each element reperesent some property of a record


B. Why do we care about Tuple
Its actually hard to understand using tuple when we have same type of annotations but different property


===========================================================================
A. Interfaces
Creates a new type, describing the property names and value types of an object

B. General strategy for Reusable Code in TS
- Create function that accept arguments that are typed with interfaces
- Objects/classes can decide to 'implement a given interface to wotk with a function.


===========================================================================
A. Classes
Blueprint to create an object with some fields (values) and methods (functions) to represent a 'thing'

B. Modifier
Keywords that we can place on different methods and properties inside of a class, the different options are public, private and protected
- public -> can be called anywhere and anytime
- private -> can only be called by other methods in this class
- protected -> can be called other methods in this class, or by other methods in child classes

C. Constructor
Constructor function is a very special function defined inside of a class. Anytime that we define a constructor, it will be instantly excecuted, right when we create a new instance of the class.

D. Why do we care about Class
Same as interfaces, this is the primary tool that we use inside Typescript (reusable)