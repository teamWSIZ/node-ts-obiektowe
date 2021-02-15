

class A {

}

class B {
    doit(a:A) {

    }
}

let a = new A();
let b = new B();
b.doit(a);
b.doit(b);

