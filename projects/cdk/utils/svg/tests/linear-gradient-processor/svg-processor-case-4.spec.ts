import {tuiSvgLinearGradientProcessor} from '@taiga-ui/cdk';

const ACTUAL = `
<svg fill="none" height="232" viewBox="0 0 440 232" width="440" xmlns="http://www.w3.org/2000/svg">
    <mask fill="black" height="235" id='my.cool:thing\\РУССКИЙ_中國人path_1-outside-1' maskUnits="userSpaceOnUse" width="444" x="-2" y="-2">
        <rect fill="white" height="235" width="444" x="-2" y="-2" />
        <path
            clip-rule="evenodd"
            d="M440 4C440 1.79086 438.209 0 436 0H4C1.79086 0 0 1.79087 0 4.00001V227C0 229.209 1.79086 231 4 231H436C438.209 231 440 229.209 440 227V4ZM117 4.00195C112.582 4.00195 109 7.58367 109 12.002V219.002C109 223.42 112.582 227.002 117 227.002H324C328.418 227.002 332 223.42 332 219.002V12.002C332 7.58368 328.418 4.00195 324 4.00195H117Z"
            fill-rule="evenodd"
        />
    </mask>
    <path
        clip-rule="evenodd"
        d="M440 4C440 1.79086 438.209 0 436 0H4C1.79086 0 0 1.79087 0 4.00001V227C0 229.209 1.79086 231 4 231H436C438.209 231 440 229.209 440 227V4ZM117 4.00195C112.582 4.00195 109 7.58367 109 12.002V219.002C109 223.42 112.582 227.002 117 227.002H324C328.418 227.002 332 223.42 332 219.002V12.002C332 7.58368 328.418 4.00195 324 4.00195H117Z"
        fill="black"
        fill-opacity="0.24"
        fill-rule="evenodd"
    />
    <path
        d="M4 2H436V-2H4V2ZM2 227V4.00001H-2V227H2ZM436 229H4V233H436V229ZM438 4V227H442V4H438ZM111 12.002C111 8.68824 113.686 6.00195 117 6.00195V2.00195C111.477 2.00195 107 6.4791 107 12.002H111ZM111 219.002V12.002H107V219.002H111ZM117 225.002C113.686 225.002 111 222.316 111 219.002H107C107 224.525 111.477 229.002 117 229.002V225.002ZM324 225.002H117V229.002H324V225.002ZM330 219.002C330 222.316 327.314 225.002 324 225.002V229.002C329.523 229.002 334 224.525 334 219.002H330ZM330 12.002V219.002H334V12.002H330ZM324 6.00195C327.314 6.00195 330 8.68825 330 12.002H334C334 6.47911 329.523 2.00195 324 2.00195V6.00195ZM117 6.00195H324V2.00195H117V6.00195ZM436 233C439.314 233 442 230.314 442 227H438C438 228.105 437.105 229 436 229V233ZM-2 227C-2 230.314 0.686285 233 4 233V229C2.89543 229 2 228.105 2 227H-2ZM436 2C437.105 2 438 2.89543 438 4H442C442 0.686294 439.314 -2 436 -2V2ZM4 -2C0.686287 -2 -2 0.686302 -2 4.00001H2C2 2.89543 2.89543 2 4 2V-2Z"
        fill="white"
        mask="url(#my.cool:thing\\РУССКИЙ_中國人path_1-outside-1)"
    />
</svg>
`;

const EXPECTED = `
<svg fill="none" height="232" viewBox="0 0 440 232" width="440" xmlns="http://www.w3.org/2000/svg">
    <mask fill="black" height="235" id='id_MOCK_ID_my.cool:thing\\РУССКИЙ_中國人path_1-outside-1' maskUnits="userSpaceOnUse" width="444" x="-2" y="-2">
        <rect fill="white" height="235" width="444" x="-2" y="-2" />
        <path
            clip-rule="evenodd"
            d="M440 4C440 1.79086 438.209 0 436 0H4C1.79086 0 0 1.79087 0 4.00001V227C0 229.209 1.79086 231 4 231H436C438.209 231 440 229.209 440 227V4ZM117 4.00195C112.582 4.00195 109 7.58367 109 12.002V219.002C109 223.42 112.582 227.002 117 227.002H324C328.418 227.002 332 223.42 332 219.002V12.002C332 7.58368 328.418 4.00195 324 4.00195H117Z"
            fill-rule="evenodd"
        />
    </mask>
    <path
        clip-rule="evenodd"
        d="M440 4C440 1.79086 438.209 0 436 0H4C1.79086 0 0 1.79087 0 4.00001V227C0 229.209 1.79086 231 4 231H436C438.209 231 440 229.209 440 227V4ZM117 4.00195C112.582 4.00195 109 7.58367 109 12.002V219.002C109 223.42 112.582 227.002 117 227.002H324C328.418 227.002 332 223.42 332 219.002V12.002C332 7.58368 328.418 4.00195 324 4.00195H117Z"
        fill="black"
        fill-opacity="0.24"
        fill-rule="evenodd"
    />
    <path
        d="M4 2H436V-2H4V2ZM2 227V4.00001H-2V227H2ZM436 229H4V233H436V229ZM438 4V227H442V4H438ZM111 12.002C111 8.68824 113.686 6.00195 117 6.00195V2.00195C111.477 2.00195 107 6.4791 107 12.002H111ZM111 219.002V12.002H107V219.002H111ZM117 225.002C113.686 225.002 111 222.316 111 219.002H107C107 224.525 111.477 229.002 117 229.002V225.002ZM324 225.002H117V229.002H324V225.002ZM330 219.002C330 222.316 327.314 225.002 324 225.002V229.002C329.523 229.002 334 224.525 334 219.002H330ZM330 12.002V219.002H334V12.002H330ZM324 6.00195C327.314 6.00195 330 8.68825 330 12.002H334C334 6.47911 329.523 2.00195 324 2.00195V6.00195ZM117 6.00195H324V2.00195H117V6.00195ZM436 233C439.314 233 442 230.314 442 227H438C438 228.105 437.105 229 436 229V233ZM-2 227C-2 230.314 0.686285 233 4 233V229C2.89543 229 2 228.105 2 227H-2ZM436 2C437.105 2 438 2.89543 438 4H442C442 0.686294 439.314 -2 436 -2V2ZM4 -2C0.686287 -2 -2 0.686302 -2 4.00001H2C2 2.89543 2.89543 2 4 2V-2Z"
        fill="white"
        mask="url(#id_MOCK_ID_my.cool:thing\\РУССКИЙ_中國人path_1-outside-1)"
    />
</svg>
`;

describe('svgLinearGradientProcessor[case4]', () => {
    it('correct replacing ids more special characters in ID', () => {
        expect(tuiSvgLinearGradientProcessor(ACTUAL, 'MOCK_ID')).toEqual(EXPECTED);
    });
});
