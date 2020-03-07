import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body, html {
        font-family: 'Roboto', sans-serif;
        font-size: 15px;
        font-weight: 400;
        color: #333333;
    }

    body {
        padding: 40px 0;
        margin: 0;
    }

    button, a, .btn {
        outline: none;
        box-shadow: none;
    }

    a {
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    .alert {
        color: #fff;
        border-radius: 5px;
        padding: 5px 10px;

        &.alert-error {
            background: #E53A40;
        }
    }

    .btn {
        font-size: 1.2rem;
        padding: 0;
        color: #fff;
        border: 1px solid;
        border-radius: 5px;
        padding: 10px 15px;
        
        &.btn-primary {
            background: #467ab2;
            border-color: #3f6d9f;
        }
    }

    .text-primary {
        color: #467ab2;
    }

    .text-center {
        text-align: center;
    }

    .form {
        max-width: 300px;
        width: 100%;
        margin: auto;

        h1 {
            margin-bottom: 10px;
        }
        label {
            font-weight: bold;
            display: block;
        }
        input {
            border-radius: 4px;
            width: 100%;
            padding: 0 10px;
            margin: 5px 0 15px;
            border: 1px solid #cccccc;
            height: 30px;
            line-height: 30px;
            box-sizing: border-box;
        }
        .button {

            a {
                margin-left: 15px;
            }
        }
    }
`
