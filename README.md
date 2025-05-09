# SauceDemo Playwright POM Automation Suite

## 📌 Overview
This project demonstrates a complete automated test suite for [SauceDemo](https://www.saucedemo.com) using [Playwright](https://playwright.dev/) and the **Page Object Model (POM)** design pattern with **JavaScript**. It contains 10 modular test cases covering login, UI validations, cart behavior, and checkout flows.

---

## 📁 Project Structure
```
root/
├── tests/
│   └── saucedemo_assessment.spec.js         # Main spec file with 10 test cases
├── pages/
│   ├── loginPage.js                     # Login page object
│   ├── inventoryPage.js                 # Inventory (product) page object
│   └── cartPage.js                      # Cart and checkout page object
├── playwright.config.js                # Global config for Playwright
├── package.json                        # Node project manifest
└── README.md                           # Project documentation (this file)
```

---

## ✅ Prerequisites
- [Node.js](https://nodejs.org/) (v16 or newer)

Install dependencies:
```bash
npm install
```

Install Playwright browsers:
```bash
npx playwright install
```

---

## 🚀 How to Run Tests
Run all tests:
```bash
ç
```

View HTML test report:
```bash
npx playwright show-report
```

---

## 🧪 Test Coverage Summary
| TC ID | Test Case Description |
|-------|------------------------|
| TC1   | Verify product description contains expected text |
| TC2   | Reset app state and clear cart |
| TC3   | Login with standard user |
| TC4   | Verify product name is displayed correctly |
| TC5   | Cart badge should not be visible when cart is empty |
| TC6   | Navigate back from checkout |
| TC7   | Cart retains items across navigation |
| TC8   | Verify logout option is available in side menu |
| TC9   | Locked out user shows error message |
| TC10  | Footer contains copyright text |

---

## 🧰 Tech Stack
- **Playwright** (Test Runner)
- **JavaScript** (ES6+)
- **POM (Page Object Model)**

---

## ✍️ Author & Maintainer
- Ahona Afrin

For feedback or issues, please reach out via GitHub or email.

---

## 📄 License
This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
