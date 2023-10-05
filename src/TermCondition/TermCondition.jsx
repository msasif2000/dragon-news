import { Link } from "react-router-dom";


const TermCondition = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content">
                <div className="max-w-full px-20">
                    <h1 className="text-5xl font-bold text-center">Hello User</h1>
                    <p className="py-6">By registering for an account on <Link to="/" className="font-bold text-blue-500">[Dragon News]</Link>, you agree to the following terms and conditions:</p>
                    <p>1. **Account Information**: You are responsible for providing accurate and up-to-date information when creating your account. This includes your name, email address, and any other required details.
                    </p>
                    <p>2. **Security**: You are responsible for maintaining the security of your account credentials (username and password). Do not share your login information with others, and immediately notify us of any unauthorized access to your account.
                    </p>
                    <p>3. **User Conduct**: You agree to use our website and services in a lawful and respectful manner. Do not engage in any activities that violate local, national, or international laws or infringe upon the rights of others.
                    </p>
                    <p>4. **Content Usage**: The content provided on [Dragon News] is for personal, non-commercial use only. You may not reproduce, distribute, or modify our content without explicit permission.
                    </p>
                    <p>5. **Privacy**: We respect your privacy and handle your personal data in accordance with our Privacy Policy. By using our website, you consent to the collection and use of your information as described in our Privacy Policy.
                    </p>
                    <p>6. **User-Generated Content**: When submitting comments, feedback, or any user-generated content, you agree to adhere to our guidelines for respectful and constructive discourse. We reserve the right to moderate and remove content that violates our policies.
                    </p>
                    <p>7. **Account Termination**: [Dragon News] reserves the right to suspend or terminate your account if you violate these terms and conditions or engage in inappropriate behavior on our platform.
                    </p>
                    <p>8. **Updates**: We may update these terms and conditions from time to time. It is your responsibility to review and understand the most current version. Continued use of your account implies acceptance of any changes.
                    </p>
                    <p>9. **Contact**: If you have any questions or concerns about these terms and conditions, please contact our customer support team at [<span className="text-blue-600 font-bold">dragon.news.@gmail.com</span>].
                    </p>
                    <p>By clicking the &quot;Register&quot; button, you acknowledge that you have read, understood, and agree to abide by these terms and conditions. Violation of these terms may result in the suspension or termination of your account.
                    </p>
                    <button className="btn btn-primary btn-sm"><Link to="/register">Get Started</Link></button>
                </div>
            </div>
        </div>
    );
};

export default TermCondition;