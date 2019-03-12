/*
 You probably don't need to be in this file!
 */
import Link from 'next/link'
export default () => (
    <div>
        <h1>Live Code Challenge</h1>

        <h2>
            <Link href="/password">
                <a>Password Page</a>
            </Link>
        </h2>

        <h2>Scenario</h2>
        <p>
            Imagine it is your third day at Outline and you've been assigned your first task.
            Pretend that the Outline Engineer who is with you is your pair programming partner but
            that you're the one who is going to be writing all the code / coming up with the plan.
            Your "partner" will happily answer any questions you have about the stack / various apis
            / the project requirements but probably won't tell you "how" to do it.
        </p>

        <hr />

        <h2>Requirements</h2>
        <p>
            Outline is adding stricter password requirements to our application. We need you to
            create a new reusable password component that could be put anywhere on the site. For
            right now, however, we just want a proof of concept / demo of this component on the
            password page we've created.
        </p>
        <h3>A Valid Password Must: </h3>
        <ul>
            <li> {`< 64 characters`} </li>
            <li> {`> 8 characters`}</li>
            <li>includes a lowercase letter </li>
            <li>includes an uppercase letter</li>
            <li> includes a number</li>
            <li>{`includes a non-alphanumeric character (one of -!$%^&*()_+|~={}\[\]:";'<>?,.\/)`}</li>
        </ul>
        <h3>A good UI will:</h3>
        <ul>
            <li>provide the user with feedback regarding the validity of their password</li>
        </ul>
        <hr />
        <h2>What are we looking for?</h2>
        <p>
            We are most interested in your process and how you choose to approach the problem so
            make sure to communicate your thoughts throughout –– both through your code, tests, and
            comments but also by asking us questions or walking us through your thinking. In
            particular we are interested in:
            <ul>
                <li>
                    Criticial Thinking / Problem Solving –– how do you consume requirements and
                    create a plan of attack?
                </li>
                <li>Testing –– how do you know you've accomplished your goal?</li>
                <li>
                    React / JavaScript / Frontend –– are you familiar and comfortable with React,
                    Javascript, and the browser.
                </li>
                <li>
                    Teamwork –– how do you interact with your partner and think about future
                    developers?
                </li>
                <li>User empathy –– in what ways are you keeping in mind our end user?</li>
            </ul>
        </p>
        <hr />
        <h2 id="tips">Tips</h2>
        <ul>
            <li>
                {`/[-!$%^&*()_+|~={}\[\]:";'<>?,.\/]/.test(string)`} will check if a string has a
                non - alphanumeric character
            </li>
        </ul>
    </div>
)
