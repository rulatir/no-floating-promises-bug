export default class Bug {
    //demonstrate that SOME tslint rule violations like "comment must start with a space" are shown by the IDE allright.

    async foo() : Promise<number> {
        // I expect this usage of async bar() without await to be flagged,
        // and running node_modules/tslint/bin/tslint --project . manually DOES flag it.
        // It is just the IDE that fails to display the diagnostic.
        this.bar();
        return 0;
    }

    // tslint:disable-next-line:no-empty
    async bar() {}
}