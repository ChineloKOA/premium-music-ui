import React from 'react';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiButton,
  EuiFieldText,
} from '@elastic/eui';

export default function ArtistSearch() {
      const fieldTextStyle = {
        width: '100%', // Full width of the container
        height: '40px' // Double the default height
     };
  return (
      <div>
          <div style={{marginTop: '32px'}}></div>
          <EuiFlexGroup justifyContent="center" style={{maxWidth: 600}}>
              <EuiFlexItem>
                  <EuiFormRow label="Type in artist name">
                      <EuiFieldText style={fieldTextStyle}/>
                  </EuiFormRow>
              </EuiFlexItem>
          </EuiFlexGroup>
          <div style={{marginTop: '32px'}}></div>
          {/* This adds the space */}
          <EuiFlexGroup justifyContent="center" style={{maxWidth: 600}}>
              <EuiFlexItem grow={false}>
                  <EuiFormRow hasEmptyLabelSpace>
                      <EuiButton>Submit</EuiButton>
                  </EuiFormRow>
              </EuiFlexItem>
          </EuiFlexGroup>
      </div>
  );
}