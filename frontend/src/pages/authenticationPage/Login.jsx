import Form from "../../utilites/Form"
export default function Login() {
    return (<>
        <Form
            content={{ title: "EduDoc Portal", description: 'Educational Document Management System' }}
            fields={[
                {
                    label: 'email',
                    type: 'email',
                    placeholder: 'enter email'
                },
                {
                    label: 'password',
                    type: 'password',
                    placeholder: 'enter password'
                }
            ]}
            actionButtonText='Login In'
            altButtonText="Don't have an account? Register"
            altButtonLink='/register'

        />

    </>)
}