import React, { useState, useEffect } from "react"
import { FaCopy } from 'react-icons/fa';

export default function PswdGen() {

    // State variables
    const [password, setPassword] = useState("");
    const [passwordLength, setPasswordLength] = useState(8);

    // Password options (checkboxes)
    const [useUppercase, setUseUppercase] = useState(true);
    const [useLowercase, setUseLowercase] = useState(true);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useSymbols, setUseSymbols] = useState(true);

    const [copied, setCopied] = useState(false);

    // Generate password whenever passwordLength or other state values change
    useEffect(() => {
        generatePassword();
    }, [passwordLength, useUppercase, useLowercase, useNumbers, useSymbols]);

    // Generate a random password
    const generatePassword = () => {

        // Password characters
        let chars = '';
        if (useUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (useLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
        if (useNumbers) chars += '0123456789';
        if (useSymbols) chars += '!@#$%^&*()_+-={}[]\\|:;"<>,.?/~`';
        let password = '';

        // Generate a random password
        for (let i = 0; i < passwordLength; i++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        // Set the state
        setPassword(password);
    }

    // Event handlers
    const handlePasswordLengthChange = (event) => {
        setPasswordLength(parseInt(event.target.value));
    };

    const handleInputChange = (setState) => {
        setState((prevState) => !prevState);
    };

    const handleUseUppercaseChange = () => handleInputChange(setUseUppercase);
    const handleUseLowercaseChange = () => handleInputChange(setUseLowercase);
    const handleUseNumbersChange = () => handleInputChange(setUseNumbers);
    const handleUseSymbolsChange = () => handleInputChange(setUseSymbols);

    const handleCopyClick = () => {
        navigator.clipboard.writeText(password);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500);
      };

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {/* Password */}
                <div style={{ width: '100%', maxWidth: '500px', height: '80px', backgroundColor: '#f5f5f5', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '24px', margin: '20px 0' }}>
                    <div style={{paddingLeft: '20px'}}>{password ? password : ''}</div>
                    <FaCopy style={{ marginRight: '20px', color: copied ? '#64A67F' : '#6C757D', cursor: 'pointer' }} onClick={handleCopyClick} />
                </div>


                {/* Options */}
                <div style={{ width: '100%', maxWidth: '500px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
                    <input type="number" id="passwordLength-number" name="passwordLength-number" min="1" max="30" step="1" value={passwordLength} onChange={handlePasswordLengthChange} style={{ border: '2px solid #ccc', borderRadius: '5px', padding: '5px', fontSize: '16px', outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', margin: '0px 10px'}} />
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <label htmlFor="passwordLength">Password length:</label>
                        <input type="range" id="passwordLength-slider" name="passwordLength-slider" min="1" max="30" value={passwordLength} onChange={handlePasswordLengthChange} style={{ width: '200px', margin: '10px 10px' }} />
                    </div> 
                    

                    {/* Checkboxes */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <input type="checkbox" id="useUppercase" name="useUppercase" checked={useUppercase} onChange={handleUseUppercaseChange} style={{ margin: '0 10px' }} />
                            <label htmlFor="useUppercase">Uppercase</label>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <input type="checkbox" id="useLowercase" name="useLowercase" checked={useLowercase} onChange={handleUseLowercaseChange} style={{ margin: '0 10px' }} />
                            <label htmlFor="useLowercase">Lowercase</label>
                        </div>


                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <input type="checkbox" id="useNumbers" name="useNumbers" checked={useNumbers} onChange={handleUseNumbersChange} style={{ margin: '0 10px' }} />
                            <label htmlFor="useNumbers">Numbers</label>
                        </div>


                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <input type="checkbox" id="useSymbols" name="useSymbols" checked={useSymbols} onChange={handleUseSymbolsChange} style={{ margin: '0 10px' }} />
                            <label htmlFor="useSymbols">Symbols</label>
                        </div>
                    </div>
                    {/* <button onClick={generatePassword} style={{ borderRadius: '5px', backgroundColor: '#4caf50', color: '#fff', padding: '10px 20px', fontSize: '18px' }}>Generate password</button> */}
                </div>
            </div>
        </>
    );
}