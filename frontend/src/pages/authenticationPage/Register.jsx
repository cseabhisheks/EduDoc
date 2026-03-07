import Form from "../../utilites/Form"
export default function Register() {
    return (<>
        <Form
            content={{ title: "Create Account", description: 'Register for EduDoc Portal' }}
            fields={[
                {
                    label: "name",
                    type: "text",
                    placeholder: "enter name"
                },
                {
                    label: "email",
                    type: "email",
                    placeholder: "enter email"
                },
                {
                    label: "password",
                    type: "password",
                    placeholder: "enter password"
                },
                {
                    label: "role",
                    type: "text",
                    placeholder: "enter role"
                },
                {
                    label: "department",
                    type: "text",
                    placeholder: "enter department"
                },
                {
                    label: "enrollmentNo",
                    type: "text",
                    placeholder: "enter enrollment number"
                }
            ]}
            actionButtonText='Register'
            altButtonText="Already have an account? Login"
            altButtonLink='/login'
        />

    </>)
}