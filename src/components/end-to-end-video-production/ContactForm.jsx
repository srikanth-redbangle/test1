import { FormProvider, useForm } from 'react-hook-form'
import { Input, MetaFields } from '@/components/form'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  companyEmailValidation,
  // liveUrlValidation,
  phoneNumberValidation,
} from '@/components/form/utils'

import Script from 'next/script'
import { useFormMeta } from '@/hooks'
import { useRouter } from 'next/router'
import { PhoneInput } from '@/components/form/PhoneInput'

const schema = object({
  First_Name: string().required('First name is required'),
  Last_Name: string().required('Last name is required'),
  Email: string()
    .email('Email is invalid')
    .required('Email is required')
    .test('domain', 'Company Email is required', companyEmailValidation),
  Phone: string()
    .required('Phone number is required')
    .max(20, 'Phone number must be within 20 characters')
    .test('phonenumber', 'Phone number is invalid', phoneNumberValidation), //PhoneNumber
  Company: string().required('Company name is required'), //company
  // Website: string()
  //   .test('website', 'Website url not valid', liveUrlValidation)
  //   .required('Website is required'),
  Designation: string().required('Designation is required'), //designation
  Description: string(),
})
const defaultValues = {
  First_Name: '',
  Last_Name: '',
  Email: '',
  Phone: '',
  Company: '',
  // Website: '',
  Designation: '',
  Description: '',
}

export const ContactForm = () => {
  const metaValues = useFormMeta()
  const router = useRouter()
  const methods = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })
  const [First_Name, Last_Name] = methods.watch(['First_Name', 'Last_Name'])
  const sourceURL =
    typeof window !== 'undefined'
      ? window.location.href
      : 'https://redbangle.com/'
  const routerSource = router.query['utm_source']
  const routerCampaign = router.query['utm_campaign']
  const routerMedium = router.query['utm_medium']
  const routerContent = router.query['utm_content']
  const routerTerm = router.query['utm_term']

  const onSubmit = async (e) => {
    e.preventDefault()
    const siteKey = '6LfsAwApAAAAAJFgAQaO7_xrrt6Y61thOQqmOuD4'
    const verifyURL =
      'https://a9road3i6d.execute-api.ap-south-1.amazonaws.com/dev/verify'

    const token = await grecaptcha.execute(siteKey, {
      action: 'submit',
    })

    fetch(verifyURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'g-recaptcha-response': token,
      }),
    })
      .then(async () => {
        const isValidForm = await methods.trigger()
        if (isValidForm) {
          // console.log('valid form')
          setTimeout(() => {
            methods.reset(defaultValues)
          }, 500)
          e.target.submit()
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch request
        console.error('Error:', error)
      })
  }

  return (
    <FormProvider {...methods}>
      <form
        action="https://crm.zoho.com/crm/WebToLeadForm"
        name="WebToLeads3202011000002781001"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        onSubmit={onSubmit}
      >
        <MetaFields />
        <input
          type="text"
          hidden
          style={{ display: 'hidden' }}
          name="xnQsjsdp"
          value="4cc8622095994ef39e8cdc2b3cd1fd98c36d2e2b911d8ae251785b602a4261ae"
        />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input
          type="text"
          hidden
          style={{ display: 'hidden' }}
          name="xmIwtLD"
          value="085cc69187c7848f10bdb9778be4b4a6aa6d940a6de6344bb4107f9f9091d273"
        />
        <input
          type="text"
          hidden
          style={{ display: 'hidden' }}
          name="actionType"
          value="TGVhZHM="
        />
        <input
          type="text"
          hidden
          style={{ display: 'hidden' }}
          name="returnURL"
          value="https&#x3a;&#x2f;&#x2f;www.redbangle.com&#x2f;success"
        />

        <input
          name="First Name"
          type="text"
          id="First_Name"
          value={First_Name}
          hidden
        />
        <input
          name="Last Name"
          type="text"
          id="Last_Name"
          value={Last_Name}
          hidden
        />
        {/* Lead source URL */}
        <input name="LEADCF4" value={sourceURL} hidden />

        {/*  Lead Source */}
        <input
          name="Lead Source"
          value={routerSource ?? metaValues['utm_source'] ?? ''}
          hidden
        />

        {/*  UTM Source */}
        <input
          name="LEADCF11"
          value={routerSource ?? metaValues['utm_source'] ?? ''}
          hidden
        />

        {/*  UTM Campaign */}
        <input
          name="LEADCF7"
          value={routerCampaign ?? metaValues['utm_campaign'] ?? ''}
          hidden
        />

        {/*  UTM Medium */}
        <input
          name="LEADCF8"
          value={routerMedium ?? metaValues['utm_medium'] ?? ''}
          hidden
        />

        {/*  UTM Content */}
        <input
          name="LEADCF9"
          value={routerContent ?? metaValues['utm_content'] ?? ''}
          hidden
        />

        {/*  UTM Term */}
        <input
          name="LEADCF10"
          value={routerTerm ?? metaValues['utm_term'] ?? ''}
          hidden
        />

        {/* <input type="hidden" name="zf_referrer_name" value="" /> */}
        {/* To Track referrals , place the referrer name within the " " in the above hidden input field */}
        {/* <input type="hidden" name="zf_redirect_url" value="" /> */}
        {/* To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field */}
        {/* <input type="hidden" name="zc_gad" value="" /> */}
        {/* If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM  */}
        <div className="grid grid-cols-1 gap-8">
          <div className="grid gap-8 md:gap-5 grid-cols-1 md:grid-cols-2">
            <Input
              borderedInput
              name="First_Name"
              placeholder="First name"
              required
            />
            <Input
              borderedInput
              name="Last_Name"
              placeholder="Last Name"
              required
            />
            {/* <Input
            borderedInput
            name="Phone"
            placeholder="Phone Number"
            required
          /> */}

          </div>
          <PhoneInput
            borderedInput
            name="Phone"
            placeholder="Phone Number"
            required
          />
          <Input borderedInput name="Email" placeholder="Work Email" required />
          <Input
            borderedInput
            name="Company"
            placeholder="Company Name"
            required
          />

          {/* <Input
            borderedInput
            name="Designation"
            placeholder="Designation"
            required
          /> */}
          {/* <Input borderedInput name="Description" placeholder="Message" /> */}
        </div>
        <Button
          type="submit"
          className="w-full mt-8 md:mt-10"
          suffix={<LineArrow hover />}
        >
          Contact us
        </Button>
        <Script
          id="wf_anal"
          src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=085cc69187c7848f10bdb9778be4b4a6aa6d940a6de6344bb4107f9f9091d273gid4cc8622095994ef39e8cdc2b3cd1fd98c36d2e2b911d8ae251785b602a4261aegid885e3c1045bd9bdcc91bdf30f82b5696gid14f4ec16431e0686150daa43f3210513&tw=61690b96c1d0471b638f31426f38e68aa67fb7ed6da86f32dc10ad817fe55a0a"
        ></Script>
      </form>
    </FormProvider>
  )
}
