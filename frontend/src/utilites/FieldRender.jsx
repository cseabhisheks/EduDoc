export default function FieldRender({ fields,handleChange }) {
    return (<>
        {fields.map((e, idx) => (
            
                <label key={idx} htmlFor={e.label} >
                    <b className="capitalize text-xs"><span>{e.label}</span></b>
                    {e.options ? (
                        <select name={e.label} id={e.label} onChange={handleChange} className="mt-1  border-2 bg-gray-200 text-xs h-[20px] md:h-[30px] w-full px-2 uppercase rounded-md">
                            <option  value=''>select {e.label}</option>
                            {e.options.map((e, idx) => (
                                <option key={idx} value={e}>{e}</option>
                            ))}
                        </select>
                    ) : (
                        <input onChange={handleChange} className="mt-1 border-2 bg-gray-200 text-xs h-[20px] md:h-[30px] w-full px-2 capitalize rounded-md" type={e.type} name={e.label} id={e.label} placeholder={e.placeholder} />
                    )}
                </label>
            
        ))}
    </>)
}