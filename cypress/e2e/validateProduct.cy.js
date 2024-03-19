/// <reference types = "cypress" />
import * as allure from "allure-cypress"

const productExpectedResult = [
  {
    name: "Apple",
    productResult: "9 Product(s) found."
  },
  {
    name: "Samsung",
    productResult: "8 Product(s) found."
  }
]

productExpectedResult.forEach((productData) => {
  it(`validate ${productData.name} products count`, () => {
    allure.parameter("productName", productData.name)
    allure.parameter("productResult", productData.productResult)
    cy.visit("https://www.bstackdemo.com/")
    cy.intercept("api/products").as("products")
    cy.contains(".checkmark", productData.name).click()
    cy.wait("@products")
    cy.get(".products-found")
      .invoke("text")
      .should("eq", productData.productResult)
  })
})
