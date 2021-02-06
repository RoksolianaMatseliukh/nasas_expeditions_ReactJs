import { Select } from "@material-ui/core";

export const MaterialSelect = ({ value, handleChange, label, name, array }) => {

    return (
        <Select native
            value={value}
            onChange={(event) => handleChange(event)}
            label={label}
            inputProps={{
                name,
                id: 'filled-native-simple',
            }}>

            <option aria-label="None" value="" />

            {
                array.map(({abbreviation, name}, i) => <option key={i} value={abbreviation || name}> { name } </option>)
            }
        </Select>
    );
};
