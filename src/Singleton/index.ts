class Singleton {
    private static instance: Singleton | null = null;

    private constructor() {
    }

    static getInstance(): Singleton {
        if (Singleton.instance === null) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }

    public doSomething(): void {
        console.log("Singleton does something");
    }
}

const mySingletonInstance1 = Singleton.getInstance();
const mySingletonInstance2 = Singleton.getInstance();

mySingletonInstance1.doSomething();
mySingletonInstance2.doSomething();

console.log(mySingletonInstance1 === mySingletonInstance2);
