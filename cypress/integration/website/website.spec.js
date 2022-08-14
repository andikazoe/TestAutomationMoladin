import { BASE_URL_Midtrans, MidtransPillow, Name, Email, PhoneNo, City, Address, PostalCode, CardNumber,
	ExpirationDate, CVV, Passcode } from '../../config'
import midtransPage from '../../page-object/website.component'


describe('Automation Web Demo Midtrans', () => {
	before(function () {
		cy.visit(BASE_URL_Midtrans)
	})

	beforeEach(function () {
		cy.reload()
		cy.viewport(1280, 720)
	})

	after(function () {
		cy.clearCookies({ log: true })
	})

	///** 
	it('This should be a SUCCESFULL payment flow', () => {
		midtransPage.buttonBuyNow()
		midtransPage.inputMidtransPillow(MidtransPillow)
		midtransPage.inputName(Name)
		midtransPage.inputEmail(Email)
		midtransPage.inputPhoneNo(PhoneNo)
		midtransPage.inputCity(City)
		midtransPage.inputAddress(Address)
		midtransPage.inputPostalCode(PostalCode)
		midtransPage.buttonCheckout()

		midtransPage.ChooseCreditCard()
		midtransPage.inputCardNumber(CardNumber)
		midtransPage.inputExpirationDate(ExpirationDate)
		midtransPage.inputCVV(CVV)
		midtransPage.buttonPayNow()

		//midtransPage.inputPasscode(Passcode)
	})
	//*/

	///** 
	it('This should be a FAILED payment flow', () => {
		midtransPage.buttonBuyNow()
		midtransPage.inputMidtransPillow(MidtransPillow)
		midtransPage.inputName(Name)
		midtransPage.inputEmail(Email)
		midtransPage.inputPhoneNo(PhoneNo)
		midtransPage.inputCity(City)
		midtransPage.inputAddress(Address)
		midtransPage.inputPostalCode(PostalCode)
		midtransPage.buttonCheckout()

		midtransPage.ChooseCreditCard()
		midtransPage.inputCardNumberFailed('4811111111111111')
	})
	//*/
})
