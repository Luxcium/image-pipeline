class StateVerifier {
    private state: Record<string, any> = {};

    setState(key: string, value: any): void {
        this.state[key] = value;
    }

    verifyState(key: string, expectedValue: any): boolean {
        return this.state[key] === expectedValue;
    }

    getState(key: string): any {
        return this.state[key];
    }
}

export default StateVerifier;
