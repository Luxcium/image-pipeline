import ProgressTracker from '../src/progressTracker';
import StateVerifier from '../src/stateVerifier';

describe('ProgressTracker', () => {
    it('should track task progress', () => {
        const tracker = new ProgressTracker();
        tracker.addTask('1', 'Test task 1');
        tracker.addTask('2', 'Test task 2');
        tracker.completeTask('1');
        expect(tracker.getProgress()).toBe('Progress: 1/2 tasks completed.');
    });
});

describe('StateVerifier', () => {
    it('should verify state correctly', () => {
        const verifier = new StateVerifier();
        verifier.setState('key1', 'value1');
        expect(verifier.verifyState('key1', 'value1')).toBe(true);
        expect(verifier.verifyState('key1', 'value2')).toBe(false);
    });
});
