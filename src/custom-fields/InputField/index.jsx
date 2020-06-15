import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

InputField.propTypes = {
    // props of formik field/form
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    // add more props that are defined for InputField by developer
    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaultProps = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
}

function InputField(props) {
    const {
        field,
        type, label, placeholder, disabled,
    } = props;
    const { name } = field;

    //4 props of formik field: const { name, value, onChange, onBlur } = field;
    // call 1 props: name={name} value={value} onChange={onChange} onBlur={onBlur}
    // call all:     {...field}

    return (
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input
                id={name}
                {...field}

                type={type}
                disabled={disabled}
                placeholder={placeholder} />
        </FormGroup>
    );
}

export default InputField;