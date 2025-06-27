# WebDriverIO Login Form Testing – SauceDemo

## 🔗 Launch URL
[https://www.saucedemo.com/](https://www.saucedemo.com/)

## 🧪 Test Cases

### ✅ UC-1: Test Login Form with Empty Credentials
**Steps:**
1. Type any credentials into **Username** and **Password** fields.
2. Clear the inputs.
3. Click the **Login** button.
4. ✅ Verify error message: `"Username is required"`

---

### ✅ UC-2: Test Login Form by Passing Only Username
**Steps:**
1. Type any credentials into the **Username** field.
2. Enter any text into the **Password** field.
3. Clear the **Password** input.
4. Click the **Login** button.
5. ✅ Verify error message: `"Password is required"`

---

### ✅ UC-3: Test Login with Valid Credentials
**Steps:**
1. Use one of the accepted usernames from the login page (e.g., `standard_user`).
2. Enter password: `secret_sauce`
3. Click the **Login** button.
4. ✅ Verify the dashboard title is `"Swag Labs"`

---

## ⚙️ Technical Stack

- **Test Framework:** WebDriverIO
- **Browsers Supported:** Chrome, Edge
- **Locators:** XPath
- **Design Pattern:** Page Object Model
- **Assertions:** Built-in WebDriverIO assertions
- **Logging:** [Optional] Use WebDriverIO or external logger
- **Parallel Execution:** Configured using WebDriverIO runner
- **Parameterized Tests:** Implemented with `Data Provider`

---

## 🚀 Features

- 🧪 Covers 3 main login test scenarios
- 🖥️ Runs in parallel on multiple browsers (Chrome & Edge)
- 🔄 Data-driven tests using Data Providers
- 📄 Organized using Page Object Pattern
- 🧾 Logs and assertions for better test traceability

---
