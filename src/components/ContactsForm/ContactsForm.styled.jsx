import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  width: 400px;
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
`;

export const FormFieldWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const FieldStyled = styled.input`
  padding: 8px;
  border-radius: 4px;
  margin-top: 10px;
  outline: none;
`;

export const ErrorMessage = styled.div`
  font-size: 14px;
  background-color: #ff4d4d;
  color: #ffffff;
  border: 1px solid #cc0000;
  padding: 4px 8px;
  border-radius: 4px;
  margin-top: 8px;
  font-weight: ${props => props.theme.fontWeights.bold};
  width: fit-content;
`;

export const BtnForm = styled.button`
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  height: 36px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.btnPrimary};
  color: ${props => props.theme.colors.btnSecondary};
  font-weight: ${props => props.theme.fontWeights.bold};
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  & {
    &:hover,
    &:focus-visible {
      background-color: ${props => props.theme.colors.btnSecondary};
      color: ${props => props.theme.colors.btnPrimary};
    }
  }

  svg {
    color: ${props => props.theme.colors.btnSecondary};
  }

  &:hover svg,
  &:focus-visible svg {
    color: ${props => props.theme.colors.btnPrimary};
  }
`;
