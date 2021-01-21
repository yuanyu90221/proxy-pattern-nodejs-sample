module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    // testMatch: ["**/__tests__/*.test.ts"] ,
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts?)$',
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },    
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']  
};