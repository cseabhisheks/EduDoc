import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import FieldRender from "./FieldRender";
export default function Form({
    // form function is taking props: content,fields , actionButtonText, altButtonText
    content,
    fields,
    actionButtonText,
    altButtonText,
    altButtonLink
}) {

    //  const fields = [
    //             {
    //                 label: "name",
    //                 type: "text",
    //                 placeholder: "enter name"
    //             }
    //         ]
    const [input, setInput] = useState(
        fields.reduce((acc, field) => {
            acc[field.label] = '';
            return acc;
        }, {})
    );
    const handleChange = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    console.log(input);

    return (<>
        <div className="flex items-center justify-center h-[100vh] bg-indigo-100">
            <div className="bg-white max-h-[100vh] border-2 w-[80vw] md:w-[30vw] p-4 md:p-8 flex flex-col gap-2 rounded-xl shadow-2xl ">
                {/* img title description */}
                <div className="flex flex-col items-center md:gap-2  ">
                    <FaUser className="w-[50px] h-[50px] text-3xl border-2 rounded-[100%] border-black p-2" />
                    <h1 className="text-lg font-bold tracking-[1px]">{content.title}</h1>
                    <p className="text-center text-xs text-gray-500">{content.description}</p>
                </div>
                {/* field */}
                <FieldRender fields={fields} handleChange={handleChange} />
                {/* submit button */}
                <button className="bg-black text-white text-xsfont-bold capitalize w-full rounded-xl h-[30px] md:h-[40px]">{actionButtonText}</button>
                {/* alt button */}
                <NavLink to={altButtonLink} className="text-center text-xs font-bold tracking-wide hover:underline underline-offset-4 ">{altButtonText}</NavLink>
            </div>

        </div>
    </>)
}