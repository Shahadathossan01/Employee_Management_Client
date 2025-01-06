

const InputField = ({type,placeholder,className="",value,onChange,onBlur}) => {
    return (
        <input type={type} placeholder={placeholder} className={`border-2 border-black-600 ${className}`} value={value}
        onChange={onChange}
        onBlur={onBlur} />
    );
};

export default InputField;