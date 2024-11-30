import { exec } from 'child_process';

/**
 * Executes a Python script and returns the result.
 * @param scriptPath - The path to the Python script.
 * @param callback - A callback function to handle the result.
 */
export function executePythonScript(scriptPath: string, callback: (error: Error | null, result: string | null) => void): void {
    exec(`python3 ${scriptPath}`, (error: Error | null, stdout: string, stderr: string) => {
        if (error) {
            console.error(`Error executing Python script: ${stderr}`);
            callback(error, null);
        } else {
            console.log(`Python script output: ${stdout}`);
            callback(null, stdout);
        }
    });
}
