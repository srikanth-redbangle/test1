// 'use client'
// import { FormProvider, useForm } from 'react-hook-form'
// import { yupResolver } from '@hookform/resolvers/yup'
// import { bool, mixed, object, string } from 'yup'
// import {
//   companyEmailValidation,
//   fileSizeValidation,
//   // liveUrlValidation,
//   phoneNumberValidation,
// } from '@/components/form/utils'
// import { Button } from '@/components/ui'
// import { LineArrow } from '@/components/icons'
// import {
//   Checkbox,
//   FileInput,
//   Input,
//   MetaFields,
//   TextArea,
// } from '@/components/form'
// import { Label } from '@/components/form'
// import Script from 'next/script'
// import { useFormMeta } from '@/hooks'
// import { useRouter } from 'next/router'
// import { PhoneInput } from '@/components/form/PhoneInput'
// import emailjs from '@emailjs/browser';


// const schema = object({
//   First_Name: string().required('First name is required'),
//   Last_Name: string().required('Last name is required'),

//   Phone: string()
//     .required('Phone number is required')
//     .min(10, 'Phone number must be in 10 characters')
//     .test('phonenumber', 'Phone number is invalid', phoneNumberValidation), //PhoneNumber
//   Email: string()
//     .email('Email is invalid')
//     .required('Email is required')
//     .test('domain', 'Company Email is required', companyEmailValidation),
//   Designation: string().required('Designation is required'), //designation
//   Company: string().required('Company name is required'), //company
//   // Website: string()
//   //   .test('website', 'Website url not valid', liveUrlValidation)
//   //   .required('Website is required'),
//   Description: string(),
//   theFile: mixed().test('filesize', 'File size not more than 2 MB', (v) =>
//     fileSizeValidation(v)
//   ),
//   Email_Opt_Out: bool(),
// }).required()

// const defaultValues = {
//   First_Name: '',
//   Last_Name: '',
//   Email: '',
//   Designation: '',
//   Company: '',
//   Phone: '',
//   // Website: '',
//   Description: '',
//   theFile: [],
//   Email_Opt_Out: true,
// }

// export const ClientInquiryForm = ({ isPopop = false }) => {
//   const metaValues = useFormMeta()
//   const router = useRouter()
//   const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';
//   const sourceAsPath = router.asPath
//   const sourcePath = baseUrl + sourceAsPath
//   const isBlogRoute = router.pathname.startsWith('/blog/')

//   const methods = useForm({
//     defaultValues,
//     mode: 'onBlur',
//     resolver: yupResolver(schema),
//   })
//   const [First_Name, Last_Name, Email_Opt_Out] = methods.watch([
//     'First_Name',
//     'Last_Name',
//     'Email_Opt_Out',
//   ])
//   const sourceURL =
//     typeof window !== 'undefined'
//       ? window.location.href
//       : 'https://redbangle.com/'

//   const routerSource = router.query['utm_source']
//   const routerCampaign = router.query['utm_campaign']
//   const routerMedium = router.query['utm_medium']
//   const routerContent = router.query['utm_content']
//   const routerTerm = router.query['utm_term']

//   const onSubmit = async (e) => {
//     e.preventDefault()
//     // const secretKey = '6LfsAwApAAAAALauUGbhQ9gkrnzoE1m1eQ5zTDnK'
//     const siteKey = '6LfsAwApAAAAAJFgAQaO7_xrrt6Y61thOQqmOuD4'
//     const verifyURL =
//       'https://a9road3i6d.execute-api.ap-south-1.amazonaws.com/dev/verify'

//     const token = await grecaptcha.execute(siteKey, {
//       action: 'submit',
//     })
//     // console.log(token)

//     fetch(verifyURL, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         'g-recaptcha-response': token,
//       }),
//     })
//       // .then((response) => response.json())
//       .then(async () => {
//         // console.log(data)
//         // if (data?.success) {
//         const isValidForm = await methods.trigger()
//         if (isValidForm) {
//           // console.log('valid form')
//           const formData = methods.getValues(); // Get the form data
//           console.log('Form Data:', formData);


//           emailjs.send("service_2guc9eu", "template_y19ec3r", {
//             first_name: formData?.First_Name,
//             last_name: formData?.Last_Name,
//             work_email: formData?.Email,
//             phone_number: formData?.Phone,
//             company_name: formData?.Company,
//             designation: formData?.Designation,
//             description: formData?.Description,
//             lead_source: routerSource ?? metaValues['utm_source'] ?? 'NA',
//             utm_source: routerSource ?? metaValues['utm_source'] ?? 'NA',
//             utm_medium: routerMedium ?? metaValues['utm_medium'] ?? 'NA',
//             utm_term: routerTerm ?? metaValues['utm_term'] ?? 'NA',
//             utm_campaign: routerCampaign ?? metaValues['utm_campaign'] ?? 'NA',
//             source: "India",
//             source_path: sourcePath,
//           }, "1fEuQCSphx_UcWUSv");

//           // emailjs.send("service_ak47474", "template_nmnu0ik", {
//           //   first_name: formData?.First_Name,
//           //   last_name: formData?.Last_Name,
//           //   work_email: formData?.Email,
//           //   phone_number: formData?.Phone,
//           //   company_name: formData?.Company,
//           //   designation: formData?.Designation,
//           //   description: formData?.Description,
//           //   lead_source: routerSource ?? metaValues['utm_source'] ?? 'NA',
//           //   utm_source: routerSource ?? metaValues['utm_source'] ?? 'NA',
//           //   utm_medium: routerMedium ?? metaValues['utm_medium'] ?? 'NA',
//           //   utm_term: routerTerm ?? metaValues['utm_term'] ?? 'NA',
//           //   utm_campaign: routerCampaign ?? metaValues['utm_campaign'] ?? 'NA',
//           //   source_path: sourcePath,
//           //   source: "India"
//           // }, "l4qEhbXaZdXVh_v-H");



//           // setTimeout(() => {
//           //   methods.reset(defaultValues)
//           // }, 500)
//           // e.target.submit()

//           setTimeout(() => {
//             e.target.submit()
//           }, 300);

//           setTimeout(() => {
//             methods.reset(defaultValues)
//           }, 500)
//         }
//         // }
//       })
//       .catch((error) => {
//         // Handle any errors that occur during the fetch request
//         console.error('Error:', error)
//       })
//   }

//   return (
//     <div>
//       <p className={`text-rb-black/80 font-normal ${isPopop ? 'text-xs text-center mt-2 mb-3' : 'text-sm md:text-2xl md:max-w-[80%] opacity-90 mb-6 md:mb-18'}`}>
//         We are always looking to work on exciting briefs. Let&apos;s start a
//         conversation today!
//       </p>
//       <FormProvider {...methods}>
//         <form
//           // Prod
//           action="https://crm.zoho.com/crm/WebToLeadForm"
//           name="WebToLeads3202011000002781001"
//           method="POST"
//           acceptCharset="UTF-8"
//           encType="multipart/form-data"
//           onSubmit={onSubmit}
//           className={`${isBlogRoute?'mt-10':''}`}
//         >
//           <MetaFields />
//           <input
//             type="text"
//             style={{ display: 'none' }}
//             name="xnQsjsdp"
//             value="4cc8622095994ef39e8cdc2b3cd1fd98c36d2e2b911d8ae251785b602a4261ae"
//           />
//           <input type="hidden" name="zc_gad" id="zc_gad" value="" />
//           <input
//             type="text"
//             style={{ display: 'none' }}
//             name="xmIwtLD"
//             value="085cc69187c7848f10bdb9778be4b4a6aa6d940a6de6344bb4107f9f9091d273"
//           />
//           <input
//             type="text"
//             style={{ display: 'none' }}
//             name="actionType"
//             value="TGVhZHM="
//           />
//           <input
//             type="text"
//             style={{ display: 'none' }}
//             name="returnURL"
//             value="https&#x3a;&#x2f;&#x2f;www.redbangle.com&#x2f;success"
//           />

//           {/* <input type="hidden" name="zf_referrer_name" value="" /> */}
//           {/* To Track referrals , place the referrer name within the " " in the above hidden input field */}
//           {/* <input type="hidden" name="zf_redirect_url" value="" /> */}
//           {/* To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field */}
//           {/* <input type="hidden" name="zc_gad" value="" /> */}
//           {/* If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM  */}
//           <input
//             name="First Name"
//             type="text"
//             id="First_Name"
//             value={First_Name}
//             hidden
//           />
//           <input
//             name="Last Name"
//             type="text"
//             id="Last_Name"
//             value={Last_Name}
//             hidden
//           />
//           <input
//             name="Email Opt Out"
//             type="checkbox"
//             id="Email_Opt_Out"
//             value={!Email_Opt_Out ? 'on' : ''}
//             hidden
//           />
//           {/* Lead source URL */}
//           <input name="LEADCF4" value={sourceURL} hidden />

//           {/*  Lead Source */}
//           <input
//             name="Lead Source"
//             value={routerSource ?? metaValues['utm_source'] ?? ''}
//             hidden
//           />

//           {/*  UTM Source */}
//           <input
//             name="LEADCF11"
//             value={routerSource ?? metaValues['utm_source'] ?? ''}
//             hidden
//           />

//           {/*  UTM Campaign */}
//           <input
//             name="LEADCF7"
//             value={routerCampaign ?? metaValues['utm_campaign'] ?? ''}
//             hidden
//           />

//           {/*  UTM Medium */}
//           <input
//             name="LEADCF8"
//             value={routerMedium ?? metaValues['utm_medium'] ?? ''}
//             hidden
//           />

//           {/*  UTM Content */}
//           <input
//             name="LEADCF9"
//             value={routerContent ?? metaValues['utm_content'] ?? ''}
//             hidden
//           />

//           {/*  UTM Term */}
//           <input
//             name="LEADCF10"
//             value={routerTerm ?? metaValues['utm_term'] ?? ''}
//             hidden
//           />

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-y-14">
//             <Input
//               name="First_Name"
//               label="First Name"
//               placeholder="Your first name"
//               required
//               borderedInput={isBlogRoute}
//             />
//             <Input
//               name="Last_Name"
//               label="Last Name"
//               placeholder="Your last name"
//               required
//               borderedInput={isBlogRoute}
//             />
//             {/* <Input
//               name="Phone"
//               label="Phone Number"
//               placeholder="Your Phone Number"
//               required
//             /> */}
//             <PhoneInput
//               name="Phone"
//               label="Phone Number"
//               placeholder="Your Phone Number"
//               required
//               borderedInput={isBlogRoute}
//             />
//             <Input
//               name="Email"
//               label="Work Email"
//               placeholder={isBlogRoute ? 'Your Email Id' : "example@domain.com"}
//               required
//               borderedInput={isBlogRoute}
//             />
//             <Input
//               name="Designation"
//               label="Designation"
//               placeholder="Your designation"
//               required
//               borderedInput={isBlogRoute}
//             />
//             <Input
//               name="Company"
//               label="Company Name"
//               placeholder="Your company name"
//               required
//               borderedInput={isBlogRoute}
//             />
//             {/* <Input
//               name="Website"
//               label="Website"
//               placeholder="https://www.company.com"
//               required
//             /> */}
//             <div className="md:col-span-2">
//               {
//                 isBlogRoute ? '' :
//                   <Label>
//                     Tell Us About The Project (Scope, Timeline, Budget):
//                   </Label>
//               }
//               <div className=" border-rb-border-grey rounded-lg border p-4 md:p-6">
//                 <TextArea
//                   name="Description"
//                   hideLabel
//                   placeholder="Please provide us with the details of your inquiry or any questions you may have"
//                   required
//                   // className="md:pb-14"
//                   noBorder
//                   rows={isBlogRoute ? 3 : 12}
//                 />
//                 <FileInput
//                   name="theFile"
//                   hideLabel
//                   label="Attach Files"
//                   // labelClassName="p-4 md:p-6 bottom-0 left-0 "
//                   placeholder="File size not more than 2 MB"
//                 />
//               </div>
//               <Checkbox
//                 name="Email_Opt_Out"
//                 label="Yes, sign me up for your newsletter"
//                 labelClassName="mt-4"
//               />
//             </div>
//             <Button
//               type="submit"
//               suffix={<LineArrow hover />}
//               className={`w-full md:w-auto g-recaptcha ${isPopop ? 'lg:col-span-2' : ''}`}
//             >
//               SUBMIT
//             </Button>
//           </div>
//           <Script
//             id="wf_anal"
//             src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=085cc69187c7848f10bdb9778be4b4a6aa6d940a6de6344bb4107f9f9091d273gid4cc8622095994ef39e8cdc2b3cd1fd98c36d2e2b911d8ae251785b602a4261aegid885e3c1045bd9bdcc91bdf30f82b5696gid14f4ec16431e0686150daa43f3210513&tw=61690b96c1d0471b638f31426f38e68aa67fb7ed6da86f32dc10ad817fe55a0a"
//           ></Script>
//         </form>
//       </FormProvider>
//     </div>
//   )
// }

'use client'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { bool, mixed, object, string } from 'yup'
import {
  companyEmailValidation,
  fileSizeValidation,
  // liveUrlValidation,
  phoneNumberValidation,
} from '@/components/form/utils'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import {
  Checkbox,
  FileInput,
  Input,
  MetaFields,
  TextArea,
} from '@/components/form'
import { Label } from '@/components/form'
import Script from 'next/script'
import { useFormMeta } from '@/hooks'
import { useRouter } from 'next/router'
import { PhoneInput } from '@/components/form/PhoneInput'
import emailjs from '@emailjs/browser';


const schema = object({
  First_Name: string().required('First name is required'),
  Last_Name: string().required('Last name is required'),

  Phone: string()
    .required('Phone number is required')
    .min(10, 'Phone number must be in 10 characters')
    .test('phonenumber', 'Phone number is invalid', phoneNumberValidation), //PhoneNumber
  Email: string()
    .email('Email is invalid')
    .required('Email is required')
    .test('domain', 'Company Email is required', companyEmailValidation),
  Designation: string().required('Designation is required'), //designation
  Company: string().required('Company name is required'), //company
  // Website: string()
  //   .test('website', 'Website url not valid', liveUrlValidation)
  //   .required('Website is required'),
  Description: string(),
  theFile: mixed().test('filesize', 'File size not more than 2 MB', (v) =>
    fileSizeValidation(v)
  ),
  Email_Opt_Out: bool(),
}).required()

const defaultValues = {
  First_Name: '',
  Last_Name: '',
  Email: '',
  Designation: '',
  Company: '',
  Phone: '',
  // Website: '',
  Description: '',
  theFile: [],
  Email_Opt_Out: true,
}

export const ClientInquiryForm = ({ isPopop = false }) => {
  const metaValues = useFormMeta()
  const router = useRouter()
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';
  const sourceAsPath = router.asPath
  const sourcePath = baseUrl + sourceAsPath
  const isBlogRoute = router.pathname.startsWith('/blog/')

  const methods = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })
  const [First_Name, Last_Name, Email_Opt_Out] = methods.watch([
    'First_Name',
    'Last_Name',
    'Email_Opt_Out',
  ])
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
    // const secretKey = '6LfsAwApAAAAALauUGbhQ9gkrnzoE1m1eQ5zTDnK'
    const siteKey = '6LfsAwApAAAAAJFgAQaO7_xrrt6Y61thOQqmOuD4'
    const verifyURL =
      'https://a9road3i6d.execute-api.ap-south-1.amazonaws.com/dev/verify'

    const token = await grecaptcha.execute(siteKey, {
      action: 'submit',
    })
    // console.log(token)

    fetch(verifyURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'g-recaptcha-response': token,
      }),
    })
      // .then((response) => response.json())
      .then(async () => {
        // console.log(data)
        // if (data?.success) {
        const isValidForm = await methods.trigger()
        if (isValidForm) {
          // console.log('valid form')
          const formData = methods.getValues(); // Get the form data
          // console.log('Form Data:', formData);


          emailjs.send("service_2guc9eu", "template_y19ec3r", {
            first_name: formData?.First_Name,
            last_name: formData?.Last_Name,
            work_email: formData?.Email,
            phone_number: formData?.Phone,
            company_name: formData?.Company,
            designation: formData?.Designation,
            description: formData?.Description,
            lead_source: routerSource ?? metaValues['utm_source'] ?? 'NA',
            utm_source: routerSource ?? metaValues['utm_source'] ?? 'NA',
            utm_medium: routerMedium ?? metaValues['utm_medium'] ?? 'NA',
            utm_term: routerTerm ?? metaValues['utm_term'] ?? 'NA',
            utm_campaign: routerCampaign ?? metaValues['utm_campaign'] ?? 'NA',
            source: "India",
            source_path: sourcePath,
          }, "1fEuQCSphx_UcWUSv");

          // emailjs.send("service_ak47474", "template_nmnu0ik", {
          //   first_name: formData?.First_Name,
          //   last_name: formData?.Last_Name,
          //   work_email: formData?.Email,
          //   phone_number: formData?.Phone,
          //   company_name: formData?.Company,
          //   designation: formData?.Designation,
          //   description: formData?.Description,
          //   lead_source: routerSource ?? metaValues['utm_source'] ?? 'NA',
          //   utm_source: routerSource ?? metaValues['utm_source'] ?? 'NA',
          //   utm_medium: routerMedium ?? metaValues['utm_medium'] ?? 'NA',
          //   utm_term: routerTerm ?? metaValues['utm_term'] ?? 'NA',
          //   utm_campaign: routerCampaign ?? metaValues['utm_campaign'] ?? 'NA',
          //   source_path: sourcePath,
          //   source: "India"
          // }, "l4qEhbXaZdXVh_v-H");



          // setTimeout(() => {
          //   methods.reset(defaultValues)
          // }, 500)
          // e.target.submit()

          setTimeout(() => {
            e.target.submit()
          }, 300);

          setTimeout(() => {
            methods.reset(defaultValues)
          }, 500)
        }
        // }
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch request
        console.error('Error:', error)
      })
  }

  return (
    <div>
      {
        isBlogRoute ?
          <p className='lg:text-2xl text-xl font-bold mb-10'>Give us few details and we&apos;ll get in touch</p>
          :
          <p className={`text-rb-black/80 font-normal ${isPopop ? 'text-xs text-center mt-2 mb-3' : 'text-sm md:text-2xl md:max-w-[80%] opacity-90 mb-6 md:mb-18'}`}>
            We are always looking to work on exciting briefs. Let&apos;s start a
            conversation today!
          </p>
      }
      <FormProvider {...methods}>
        <form
          // Prod
          action="https://crm.zoho.com/crm/WebToLeadForm"
          name="WebToLeads3202011000002781001"
          method="POST"
          acceptCharset="UTF-8"
          encType="multipart/form-data"
          onSubmit={onSubmit}
          className={`${isBlogRoute ? 'mt-10' : ''}`}
        >
          <MetaFields />
          <input
            type="text"
            style={{ display: 'none' }}
            name="xnQsjsdp"
            value="4cc8622095994ef39e8cdc2b3cd1fd98c36d2e2b911d8ae251785b602a4261ae"
          />
          <input type="hidden" name="zc_gad" id="zc_gad" value="" />
          <input
            type="text"
            style={{ display: 'none' }}
            name="xmIwtLD"
            value="085cc69187c7848f10bdb9778be4b4a6aa6d940a6de6344bb4107f9f9091d273"
          />
          <input
            type="text"
            style={{ display: 'none' }}
            name="actionType"
            value="TGVhZHM="
          />
          <input
            type="text"
            style={{ display: 'none' }}
            name="returnURL"
            value="https&#x3a;&#x2f;&#x2f;www.redbangle.com&#x2f;success"
          />

          {/* <input type="hidden" name="zf_referrer_name" value="" /> */}
          {/* To Track referrals , place the referrer name within the " " in the above hidden input field */}
          {/* <input type="hidden" name="zf_redirect_url" value="" /> */}
          {/* To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field */}
          {/* <input type="hidden" name="zc_gad" value="" /> */}
          {/* If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM  */}
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
          <input
            name="Email Opt Out"
            type="checkbox"
            id="Email_Opt_Out"
            value={!Email_Opt_Out ? 'on' : ''}
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

          <div className={`${isBlogRoute ? '' : 'md:gap-y-14'} grid grid-cols-1 md:grid-cols-2 gap-6`}>
            <Input
              name="First_Name"
              label="First Name"
              placeholder={isBlogRoute ? 'First Name' : "Your first name"}
              required
              borderedInput={isBlogRoute}
            />
            <Input
              name="Last_Name"
              label="Last Name"
              placeholder={isBlogRoute ? 'Last Name' : "Your last name"}
              required
              borderedInput={isBlogRoute}
            />
            {/* <Input
              name="Phone"
              label="Phone Number"
              placeholder="Your Phone Number"
              required
            /> */}
            <Input
              name="Email"
              label="Work Email"
              placeholder={isBlogRoute ? 'Work Email' : "example@domain.com"}
              required
              borderedInput={isBlogRoute}
            />
            <PhoneInput
              name="Phone"
              label={"Phone Number"}
              placeholder={isBlogRoute ? 'Phone Number' : "Your Phone Number"}
              required
              borderedInput={isBlogRoute}
            />
            <div className={`${isBlogRoute && 'col-span-1 lg:col-span-2'}`}>
              <Input
                name="Company"
                label="Company Name"
                placeholder={isBlogRoute ? 'Company Name' : "Your company name"}
                required
                borderedInput={isBlogRoute}
              />
            </div>
            <div className={`${isBlogRoute && 'col-span-1 lg:col-span-2'}`}>
              <Input
                name="Designation"
                label="Designation"
                placeholder={isBlogRoute ? 'Designation' : "Your designation"}
                required
                borderedInput={isBlogRoute}
              />
            </div>
            <div className="md:col-span-2">
              {
                isBlogRoute ? '' :
                  <Label>
                    Tell Us About The Project (Scope, Timeline, Budget):
                  </Label>
              }
              {
                isBlogRoute ?
                  <div className=" border-rb-border-grey border-b-2">
                    <TextArea
                      name="Description"
                      hideLabel
                      placeholder="Message"
                      required
                      // className="md:pb-14"
                      noBorder
                      rows={isBlogRoute ? 1 : 12}
                    />
                  </div>
                  :
                  <div className=" border-rb-border-grey rounded-lg border p-4 md:p-6">
                    <TextArea
                      name="Description"
                      hideLabel
                      placeholder="Please provide us with the details of your inquiry or any questions you may have"
                      required
                      noBorder
                      rows={isBlogRoute ? 3 : 12}
                    />
                    <FileInput
                      name="theFile"
                      hideLabel
                      label="Attach Files"
                      // labelClassName="p-4 md:p-6 bottom-0 left-0 "
                      placeholder="File size not more than 2 MB"
                    />
                  </div>
              }{
                !isBlogRoute &&
                <Checkbox
                  name="Email_Opt_Out"
                  label="Yes, sign me up for your newsletter"
                  labelClassName="mt-4"
                />
              }
            </div>
            <Button
              type="submit"
              suffix={<LineArrow hover />}
              className={`${isBlogRoute ? 'mt-5' : ''} md:w-auto g-recaptcha ${isPopop ? 'lg:col-span-2' : ''}`}
            >
              {
                isBlogRoute ?
                  'CONTACT US' : 'SUBMIT'
              }
            </Button>
          </div>
          <Script
            id="wf_anal"
            src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=085cc69187c7848f10bdb9778be4b4a6aa6d940a6de6344bb4107f9f9091d273gid4cc8622095994ef39e8cdc2b3cd1fd98c36d2e2b911d8ae251785b602a4261aegid885e3c1045bd9bdcc91bdf30f82b5696gid14f4ec16431e0686150daa43f3210513&tw=61690b96c1d0471b638f31426f38e68aa67fb7ed6da86f32dc10ad817fe55a0a"
          ></Script>
        </form>
      </FormProvider>
    </div>
  )
}
