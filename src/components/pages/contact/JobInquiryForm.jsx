import { useEffect, useState } from 'react'

import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { bool, mixed, object, number, string } from 'yup'
import {
  fileRequiredValidation,
  fileSizeValidation,
  phoneNumberValidation,
} from '@/components/form/utils'
import { Button } from '@/components/ui'
import { CornerArrow, LineArrow } from '@/components/icons'
import {
  Checkbox,
  FileInput,
  Input,
  MetaFields,
  TextArea,
} from '@/components/form'
import Script from 'next/script'
import { PhoneInput } from '@/components/form/PhoneInput'
import Link from 'next/link'
import SelectCountry from '@/components/form/SelectCountry'

const schema = object({
  Name_First: string().required('First name is required'),
  Name_Last: string().required('Last name is required'),
  Email: string().email('Email is invalid').required('Email is required'),
  COBJ1CF1: string()
    .required('Phone number is required')
    .min(10, 'Phone number must be in 10 characters')
    .test('phonenumber', 'Phone number is invalid', phoneNumberValidation), //PhoneNumber
  COBJ1CF4: object()
    .shape({
      id: number(),
      label: object({ flag: string(), name: string() }),
      value: string(),
    })
    .nullable()
    .required('Country code is required'), // Country code
  COBJ1CF2: string().required('Role is required'), //Role Inquiry About
  theFile: mixed()
    .test('filerequired', 'File is required', fileRequiredValidation)
    .test('filesize', 'File size not more than 2 MB', (v) =>
      fileSizeValidation(v)
    ),
  COBJ1CF3: string(),
  DecisionBox: bool(),
}).required()

const defaultValues = {
  Name_First: '',
  Name_Last: '',
  Email: '',
  COBJ1CF1: '',
  COBJ1CF2: '',
  theFile: [],
  COBJ1CF3: '',
  DecisionBox: false,
  COBJ1CF4: null,
}

export const JobInquiryForm = () => {
  const [countryData, setCountryData] = useState(null)

  const methods = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })
  const [
    Name_First,
    Name_Last,
    DecisionBox,
    COBJ1CF1,
    COBJ1CF2,
    COBJ1CF3,
    Email,
    COBJ1CF4,
  ] = methods.watch([
    'Name_First',
    'Name_Last',
    'DecisionBox',
    'COBJ1CF1',
    'COBJ1CF2',
    'COBJ1CF3',
    'Email',
    'COBJ1CF4',
  ])

  useEffect(() => {
    const fetchData = async () => {
      let countrylist = []

      try {
        // countrylist api call

        const response1 = await fetch(
          'https://api.redbangle.com/redbangle/user/api/getCountryCode'
        )
        const jsonData1 = await response1.json()

        jsonData1?.data.forEach((item, index) =>
          countrylist.push({
            id: index,
            label: { flag: item?.flag, name: item?.name },
            value: '+' + item?.callingCodes[0],
          })
        )
        setCountryData(countrylist)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [COBJ1CF4])

  const BE_URL = 'https://a9road3i6d.execute-api.ap-south-1.amazonaws.com/dev'
  const onSubmit = async (e) => {
    e.preventDefault()
    const siteKey = '6LfsAwApAAAAAJFgAQaO7_xrrt6Y61thOQqmOuD4'
    const verifyURL = `${BE_URL}/verify`
    const candidatesUrl = `${BE_URL}/candidates`
    const attachmentUrl = `${BE_URL}/attachments/`
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
          const formData = {
            First_Name: Name_First,
            Last_Name: Name_Last,
            DecisionBox: DecisionBox,
            Phone: COBJ1CF1,
            Email: Email,
            Role_Inquiry_About: COBJ1CF2,
            cover_message: COBJ1CF3,
            // attachments:theFile
          }
          // console.log(formData)
          fetch(candidatesUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error(`Server responded with ${response.status}`)
              }

              return response.json()
            })
            .then((data) => {
              const inputFile = document.getElementById('fileInput')

              if (inputFile.files.length === 0) {
                console.error('No file selected')
                return
              }
              const formData = new FormData()
              formData.append('file', inputFile.files[0])

              fetch(attachmentUrl + data[0].details.id, {
                method: 'POST',
                headers: {
                  Authorization:
                    'Zoho-oauthtoken 1000.9ed343e785acec0dbfa3f399652b87ff.bad36f40a3532917d49ecc70f20b7750',
                },
                body: formData,
              })
                .then((response) => {
                  if (!response.ok) {
                    throw new Error(`Server responded with ${response.status}`)
                  }
                  return response.json()
                })
                // .then((responseData) => {
                //   console.log(responseData) // Log the server response
                // })
                
                .catch((error) => {
                  console.error('Error sending data to server:', error)
                })
            })

            .catch((error) => {
              console.error('Error sending data to server:', error)
            })

          setTimeout(() => {
            methods.reset(defaultValues)
          }, 500)
          e.target.submit()
        }
      })
      .catch((error) => {
        console.error('Error sending data to server:', error)
      })
  }

  return (
    <div>
      <p className="text-rb-black/80 font-normal text-sm md:text-2xl opacity-90 md:max-w-[65%] mb-6 md:mb-18">
        We are always looking for good people with amazing talent. If
        that&apos;s you, <br className="md:hidden" />
        write to us!
        <Link
          href="/career"
          data-rb-cursor-state="invisible"
          className="text-rb-red md:text-[16px] md:leading-[1.25] font-bold max-w-max"
        >
          &nbsp; Explore Career Page{' '}
          <CornerArrow className="w-4 h-4 md:w-5 md:h-5 rotate-[45deg] inline-block" />
        </Link>
      </p>
      <FormProvider {...methods}>
        <form
          // Prod
          action="https://crm.zoho.com/crm/WebForm"
          name="WebForm3202011000002789825"
          method="POST"
          acceptCharset="UTF-8"
          encType="multipart/form-data"
          onSubmit={onSubmit}
        >
          <MetaFields />
          <input
            type="text"
            style={{ display: 'none' }}
            name="xnQsjsdp"
            value="4cc8622095994ef39e8cdc2b3cd1fd98c36d2e2b911d8ae251785b602a4261ae"
          />
          <input type="hidden" name="zc_gad" id="zc_gad" value=""></input>
          <input
            type="text"
            style={{ display: 'none' }}
            name="xmIwtLD"
            value="085cc69187c7848f10bdb9778be4b4a6d0b1327abfad6b657a614c2313836f65"
          />
          <input
            type="text"
            style={{ display: 'none' }}
            name="actionType"
            value="Q3VzdG9tTW9kdWxlMQ=="
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
            type="text"
            id="NAME"
            name="NAME"
            value={`${Name_First} ${Name_Last}`}
            hidden
          />
          <input
            type="checkbox"
            id="Email_Opt_Out"
            name="Email Opt Out"
            value={!DecisionBox ? 'on' : ''}
            hidden
          />

          {/* Country code */}
          {/* <input name="COBJ1CF4" hidden value={'+' + COBJ1CF4?.value} /> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-y-14">
            <Input
              name="Name_First"
              label="First Name"
              placeholder="Your first name"
              required
            />
            <Input
              name="Name_Last"
              label="Last Name"
              placeholder="Your last name"
              required
            />
            <Input
              name="Email"
              label="Email"
              placeholder="example@domain.com"
              required
            />
            {/* <Input
              name="COBJ1CF1"
              label="Phone"
              placeholder="Enter phone number"
              required
            /> */}
            {/* <PhoneInput
              name="COBJ1CF1"
              label="Phone"
              placeholder="Enter Phone Number"
              required
            /> */}

            <div className="col-span-1 ">
              <label className="form-label font-medium font-everett text-2xl text-label md:text-label-large inline-block mb-2 md:mb-4">
                Phone*
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <SelectCountry
                  name="COBJ1CF4"
                  displayLabel="hidden"
                  addCustomStyle
                  options={countryData}
                  required
                />
                <PhoneInput
                  name="COBJ1CF1"
                  label=""
                  placeholder="Your Phone Number"
                  inputClassname="px-3 md:px-4 font-normal"
                />
              </div>
            </div>
            <Input
              name="COBJ1CF2"
              label="Role Inquiry About"
              placeholder="Associate Creative Director"
              required
            />

            <FileInput
              name="theFile"
              label="CV"
              type="file"
              id="fileInput"
              uploadText="Upload document"
              required
              placeholder="No file choosen"
            />
            <div className="md:col-span-2">
              <TextArea
                name="COBJ1CF3"
                label="Cover Message"
                placeholder="Tell us why you'd be a great fit for this position."
                required
                rows={12}
              />
              <Checkbox
                name="DecisionBox"
                label="Yes, sign me up for job updates"
                labelClassName="mt-4"
              />
            </div>
            <Button
              type="submit"
              suffix={<LineArrow hover />}
              className="w-full md:w-auto"
            >
              SUBMIT
            </Button>
          </div>
          <Script
            id="wf_anal"
            src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=085cc69187c7848f10bdb9778be4b4a6d0b1327abfad6b657a614c2313836f65gid4cc8622095994ef39e8cdc2b3cd1fd98c36d2e2b911d8ae251785b602a4261aegid0553f79ba9ccf83e1be97f6851b4205dc78530f131c55496a36cdc928fa214e9gid14f4ec16431e0686150daa43f3210513&tw=61690b96c1d0471b638f31426f38e68aa67fb7ed6da86f32dc10ad817fe55a0a"
          ></Script>
        </form>
      </FormProvider>
    </div>
  )
}