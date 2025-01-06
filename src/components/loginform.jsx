import React, { useState } from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiButton,
  EuiFieldText,
} from '@elastic/eui';

export default function Login() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const fieldTextStyle = {
    width: '100%', // Full width of the container
    height: '40px' // Double the default height
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you would send the state values to your server for verification
    console.log('Submitting', { firstName, lastName, password });
    // You can use fetch or axios to send a POST request to your server
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <EuiFlexGroup style={{ maxWidth: 600 }}>
          <EuiFlexItem>
            <EuiFormRow label="First name">
              <EuiFieldText
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={fieldTextStyle}
              />
            </EuiFormRow>
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiFormRow label="Last name">
              <EuiFieldText
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={fieldTextStyle}
              />
            </EuiFormRow>
          </EuiFlexItem>
        </EuiFlexGroup>
        <div style={{ marginTop: '32px' }}></div>
        <EuiFlexGroup justifyContent="center" style={{ maxWidth: 600 }}>
          <EuiFlexItem>
            <EuiFormRow label="Password">
              <EuiFieldText
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={fieldTextStyle}
              />
            </EuiFormRow>
          </EuiFlexItem>
        </EuiFlexGroup>
        <div style={{ marginTop: '64px' }}></div>
        <EuiFlexGroup justifyContent="center" style={{ maxWidth: 600 }}>
          <EuiFlexItem grow={false}>
            <EuiFormRow hasEmptyLabelSpace>
              <EuiButton type="submit">Submit</EuiButton>
            </EuiFormRow>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </form>
  );
}