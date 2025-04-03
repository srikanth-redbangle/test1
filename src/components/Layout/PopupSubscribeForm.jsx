// import React, { useEffect } from 'react'
// import { IoClose } from "react-icons/io5";
// import { FormProvider, useForm } from 'react-hook-form'
// import { object, string } from 'yup';
// import { useFormMeta } from '@/hooks';
// import { useRouter } from 'next/router';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { Checkbox, FileInput, Input, Label, MetaFields, Select, TextArea } from '../form';
// import { PhoneInput } from '../form/PhoneInput';
// import { Button } from '../ui';
// import { LineArrow } from '../icons';
// import Script from 'next/script';
// import { subscribePopupSchemas, subscriberDefaultValues } from '@/content/subscribePopupSchemas'
// import { departmentOptions } from '../../utils/constant'



// function PopupSubscribeForm({ setIsPopupOpen, isPopupOpen, setIsClosed }) {
//     const router = useRouter()

//     const whatYouDoData = [
//         {
//             title: 'Industry Insights'
//         },
//         {
//             title: 'Trends & Reports'
//         },
//         {
//             title: 'Case Studies'
//         },
//         {
//             title: 'Practical Tips'
//         },
//         {
//             title: 'Exclusive Contents'
//         },
//         {
//             title: 'Company News'
//         }
//     ]

//     const methods = useForm({
//         defaultValues: subscriberDefaultValues,
//         mode: 'onBlur',
//         resolver: yupResolver(subscribePopupSchemas),
//     })
//     const { register, watch, formState } = methods
//     const [email] = watch(['CONTACT_EMAIL'])
//     const disabled = formState.errors.email || !email || email.length == 0

//     useEffect(() => {
//         if (!isPopupOpen) {
//             methods.reset(subscriberDefaultValues)
//         }
//     }, [isPopupOpen, methods])

//     const handleClose = () => {
//         setIsPopupOpen(false)
//         setIsClosed(true)
//         sessionStorage.setItem('formClosed', true)
//     }

//     return (
//         <>
//             <div className='h-screen w-screen fixed z-[9999] top-0 right-0 left-0 bottom-0 bg-black bg-opacity-[32%] backdrop-filter backdrop-blur-sm cursor-auto' onClick={() => setIsPopupOpen(false)} />
//             <div className='lg:min-w-[1080px] min-w-[100%] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10000] cursor-auto bg-white rounded-xl grid grid-cols-2 lg:grid-cols-3 overflow-hidden scale-75'>
//             <IoClose className="lg:hidden top-[13.25px] right-[10.91px] absolute bg-[#0000001A] h-[30.78px] w-[33.6px] rounded-full cursor-pointer" onClick={handleClose} />
//                 <div className='col-span-2 p-6 overflow-y-scroll'>
//                     <div className='text-[35px] text-center font-semibold'>SUBSCRIBE TO OUR <span className='text-[#EF001C]'>NEWSLETTER</span></div>
//                     <p className='text-center text-base font-normal mb-[14px]'>Stay in the loop with the latest updates & insider news on what’s trending on content and culture! Sign up now to get exciting content delivered straight to your inbox.</p>
//                     <FormProvider {...methods}>
//                         <form
//                             method="POST"
//                             id="zcampaignOptinForm"
//                             action="https://mdkqeorq-zgpm.maillist-manage.com/weboptin.zc"
//                             target="_blank"
//                             onSubmit={async (e) => {
//                                 console.log('methods', methods)
//                                 const isValidForm = await methods.trigger()
//                                 // const formData = methods.getValues(); 
//                                 // console.log('formData', formData)
//                                 if (isValidForm) {
//                                     setTimeout(() => {
//                                         // close form after success
//                                         setIsPopupOpen(false)
//                                     }, 500)
//                                     setTimeout(() => {
//                                         e.target.submit()
//                                     }, 300);
//                                     setTimeout(() => {
//                                         methods.reset()
//                                         router.reload()
//                                     }, 500)
//                                     sessionStorage.setItem('formSubmitted', true)
//                                     return true
//                                 }
//                                 e.preventDefault()
//                             }}
//                         >
//                             <MetaFields />
//                             {/* <input type="hidden" name="CONTACT_EMAIL" value={email} hidden /> */}

//                             <input
//                                 type="hidden"
//                                 id="secretid"
//                                 value="6LdNeDUUAAAAAG5l7cJfv1AA5OKLslkrOa_xXxLs"
//                             />
//                             {/* <!-- Do not edit the below Zoho Campaigns hidden tags --> */}
//                             <input type="hidden" id="fieldBorder" value="" onLoad="" />
//                             <input
//                                 type="hidden"
//                                 name="zc_trackCode"
//                                 id="zc_trackCode"
//                                 value="ZCFORMVIEW"
//                                 onLoad=""
//                             />
//                             <input
//                                 type="hidden"
//                                 name="viewFrom"
//                                 id="viewFrom"
//                                 value="URL_ACTION"
//                             />
//                             <input
//                                 type="hidden"
//                                 id="submitType"
//                                 name="submitType"
//                                 value="optinCustomView"
//                             />
//                             <input type="hidden" id="lD" name="lD" value="1e40004258f91711" />
//                             <input
//                                 type="hidden"
//                                 name="emailReportId"
//                                 id="emailReportId"
//                                 value=""
//                             />
//                             <input type="hidden" name="zx" id="cmpZuid" value="127b2e617" />
//                             <input type="hidden" name="zcvers" value="3.0" />
//                             <input
//                                 type="hidden"
//                                 name="oldListIds"
//                                 id="allCheckedListIds"
//                                 value=""
//                             />
//                             <input
//                                 type="hidden"
//                                 id="mode"
//                                 name="mode"
//                                 value="OptinCreateView"
//                             />
//                             <input
//                                 type="hidden"
//                                 id="zcld"
//                                 name="zcld"
//                                 value="1e40004258f91711"
//                             />
//                             <input type="hidden" id="zctd" name="zctd" value="" />
//                             <input type="hidden" id="document_domain" value="" />
//                             <input
//                                 type="hidden"
//                                 id="zc_Url"
//                                 value="mdkqeorq-zgpm.maillist-manage.com"
//                             />
//                             <input type="hidden" id="new_optin_response_in" value="0" />
//                             <input type="hidden" id="duplicate_optin_response_in" value="0" />
//                             <input
//                                 type="hidden"
//                                 id="zc_formIx"
//                                 name="zc_formIx"
//                                 value="3z1c98bf32c1a2b03d6ba41e46862e8d0aef3ac055bf4665edfc78b3343e5b4d2b"
//                             />
//                             {/* <!-- End of the campaigns hidden tags --> */}
//                             <input
//                                 type="hidden"
//                                 id="scriptless"
//                                 name="scriptless"
//                                 value="yes"
//                             />
//                             {/* <input
//               type="hidden"
//               id="zc_spmSubmit"
//               name="zc_spmSubmit"
//               value="ZCSPMSUBMIT"
//             /> */}
//                             <input type="hidden" id="isCaptchaNeeded" value="false" />
//                             <input type="hidden" id="superAdminCap" value="0" />
//                             <input
//                                 type="hidden"
//                                 id="zcWebOptin"
//                                 name="SIGNUP_SUBMIT_BUTTON"
//                                 value="Join Now"
//                             ></input>
//                             <div className="grid gap-x-6 md:gap-8">
//                                 <div className="grid gap-6 md:gap-5 grid-cols-1 md:grid-cols-2">
//                                     <Input
//                                         name="FIRSTNAME"
//                                         label="Name"
//                                         placeholder="First name"
//                                         required
//                                     />
//                                     <Input
//                                         // hideLabel
//                                         hideLabel
//                                         hideStar={true}
//                                         name="LASTNAME"
//                                         placeholder="Last name"
//                                         required
//                                     // forcedError={}
//                                     />
//                                 </div>
//                                 <Input
//                                     // {...register('CONTACT_EMAIL')}
//                                     name="CONTACT_EMAIL"
//                                     type="email"
//                                     // label={'Email'}
//                                     label={'Work Email'}
//                                     required
//                                     // placeholder="Enter email id"
//                                     placeholder="Enter Work Email id"
//                                 // className="border border-rb-dune/30 w-full h-12 md:h-[58px] tracking-[-0.16px] rounded-6xl pl-5 md:pl-6 pr-28 font-semibold md:font-bold placeholder:text-rb-black/70 bg-rb-black/5"
//                                 />
//                                 <Input
//                                     name="CONTACT_CF1"
//                                     // label="Industry"
//                                     label="Company Name"
//                                     // placeholder="Enter industry type"
//                                     placeholder="Enter Company Name"
//                                     required
//                                 />
//                                 <Input
//                                     name="CONTACT_CF3"
//                                     label="Designation"
//                                     // label="Department"
//                                     // options={departmentOptions}
//                                     // placeholder="Select your department"
//                                     placeholder="Enter Designation"
//                                 />
//                             </div>
//                             <Button
//                                 type="submit"
//                                 className="w-full mt-5 md:mt-10"
//                                 suffix={<LineArrow />}
//                             >
//                                 SUBSCRIBE
//                             </Button>
//                         </form>
//                     </FormProvider>
//                 </div>
//                 <div className='hidden lg:block'>

//                     <div className='min-w-[330px] flex bg-[#EBEBEB] h-[100%] rounded-xl'>
//                         <IoClose className="top-[13.25px] right-[10.91px] absolute bg-[#0000001A] h-[30.78px] w-[33.6px] rounded-full cursor-pointer" onClick={handleClose} />
//                         <div className='m-auto font-opensans'>
//                             <div className='text-center text-xl font-semibold'>What do you get when<br />you subscribe?</div>

//                             <div className='mt-[26px] bg-[#00000038] h-[2px] w-[90%] mx-auto mb-[34px]' />
//                             <div>
//                                 {
//                                     whatYouDoData.map((item, index) =>
//                                         <div key={index} className='text-lg text-center leading-[25px] mb-[25px] font-normal'>
//                                             {item.title}
//                                         </div>
//                                     )
//                                 }
//                             </div>

//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </>
//     )

// }

// export default PopupSubscribeForm 


import React, { useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import { FormProvider, useForm } from 'react-hook-form'
import { object, string } from 'yup';
import { useFormMeta } from '@/hooks';
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { Checkbox, FileInput, Input, Label, MetaFields, Select, TextArea } from '../form';
import { PhoneInput } from '../form/PhoneInput';
import { Button } from '../ui';
import { LineArrow } from '../icons';
import Script from 'next/script';
import { subscribePopupSchemas, subscriberDefaultValues } from '@/content/subscribePopupSchemas'
import { departmentOptions } from '../../utils/constant'



function PopupSubscribeForm({ setIsPopupOpen, isPopupOpen, setIsClosed }) {
    const router = useRouter()

    const whatYouDoData = [
        {
            title: 'Industry Insights'
        },
        {
            title: 'Trends & Reports'
        },
        {
            title: 'Case Studies'
        },
        {
            title: 'Practical Tips'
        },
        {
            title: 'Exclusive Contents'
        },
        {
            title: 'Company News'
        }
    ]

    const methods = useForm({
        defaultValues: subscriberDefaultValues,
        mode: 'onBlur',
        resolver: yupResolver(subscribePopupSchemas),
    })
    const { register, watch, formState } = methods
    const [email] = watch(['CONTACT_EMAIL'])
    const disabled = formState.errors.email || !email || email.length == 0

    useEffect(() => {
        if (!isPopupOpen) {
            methods.reset(subscriberDefaultValues)
        }
    }, [isPopupOpen, methods])

    const handleClose = () => {
        setIsPopupOpen(false)
        setIsClosed(true)
        sessionStorage.setItem('formClosed', true)
    }

    return (
        <>
            <div className='h-screen w-screen fixed z-[9999] top-0 right-0 left-0 bottom-0 bg-black bg-opacity-[32%] backdrop-filter backdrop-blur-sm cursor-auto' onClick={() => setIsPopupOpen(false)} />
            <div className='lg:min-w-[550px] min-w-[90%] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10000] cursor-auto bg-[#F1F2F6] rounded-xl grid grid-cols-2 overflow-hidden'>
                <IoClose className="top-[13.25px] right-[10.91px] absolute bg-[#0000001A] h-[30.78px] w-[33.6px] rounded-full cursor-pointer" onClick={handleClose} />
                <div className='col-span-2 p-6 overflow-y-scroll'>

                    <p className='lg:text-2xl text-xl font-bold mb-10'>Subscribe to our newsletter</p>
                    <FormProvider {...methods}>
                        <form
                            method="POST"
                            id="zcampaignOptinForm"
                            action="https://mdkqeorq-zgpm.maillist-manage.com/weboptin.zc"
                            target="_blank"
                            onSubmit={async (e) => {
                                // console.log('methods', methods)
                                const isValidForm = await methods.trigger()
                                // const formData = methods.getValues(); 
                                // console.log('formData', formData)
                                if (isValidForm) {
                                    setTimeout(() => {
                                        // close form after success
                                        setIsPopupOpen(false)
                                    }, 500)
                                    setTimeout(() => {
                                        e.target.submit()
                                    }, 300);
                                    setTimeout(() => {
                                        methods.reset()
                                        router.reload()
                                    }, 500)
                                    sessionStorage.setItem('formSubmitted', true)
                                    return true
                                }
                                e.preventDefault()
                            }}
                        >
                            <MetaFields />
                            {/* <input type="hidden" name="CONTACT_EMAIL" value={email} hidden /> */}

                            <input
                                type="hidden"
                                id="secretid"
                                value="6LdNeDUUAAAAAG5l7cJfv1AA5OKLslkrOa_xXxLs"
                            />
                            {/* <!-- Do not edit the below Zoho Campaigns hidden tags --> */}
                            <input type="hidden" id="fieldBorder" value="" onLoad="" />
                            <input
                                type="hidden"
                                name="zc_trackCode"
                                id="zc_trackCode"
                                value="ZCFORMVIEW"
                                onLoad=""
                            />
                            <input
                                type="hidden"
                                name="viewFrom"
                                id="viewFrom"
                                value="URL_ACTION"
                            />
                            <input
                                type="hidden"
                                id="submitType"
                                name="submitType"
                                value="optinCustomView"
                            />
                            <input type="hidden" id="lD" name="lD" value="1e40004258f91711" />
                            <input
                                type="hidden"
                                name="emailReportId"
                                id="emailReportId"
                                value=""
                            />
                            <input type="hidden" name="zx" id="cmpZuid" value="127b2e617" />
                            <input type="hidden" name="zcvers" value="3.0" />
                            <input
                                type="hidden"
                                name="oldListIds"
                                id="allCheckedListIds"
                                value=""
                            />
                            <input
                                type="hidden"
                                id="mode"
                                name="mode"
                                value="OptinCreateView"
                            />
                            <input
                                type="hidden"
                                id="zcld"
                                name="zcld"
                                value="1e40004258f91711"
                            />
                            <input type="hidden" id="zctd" name="zctd" value="" />
                            <input type="hidden" id="document_domain" value="" />
                            <input
                                type="hidden"
                                id="zc_Url"
                                value="mdkqeorq-zgpm.maillist-manage.com"
                            />
                            <input type="hidden" id="new_optin_response_in" value="0" />
                            <input type="hidden" id="duplicate_optin_response_in" value="0" />
                            <input
                                type="hidden"
                                id="zc_formIx"
                                name="zc_formIx"
                                value="3z1c98bf32c1a2b03d6ba41e46862e8d0aef3ac055bf4665edfc78b3343e5b4d2b"
                            />
                            {/* <!-- End of the campaigns hidden tags --> */}
                            <input
                                type="hidden"
                                id="scriptless"
                                name="scriptless"
                                value="yes"
                            />
                            {/* <input
              type="hidden"
              id="zc_spmSubmit"
              name="zc_spmSubmit"
              value="ZCSPMSUBMIT"
            /> */}
                            <input type="hidden" id="isCaptchaNeeded" value="false" />
                            <input type="hidden" id="superAdminCap" value="0" />
                            <input
                                type="hidden"
                                id="zcWebOptin"
                                name="SIGNUP_SUBMIT_BUTTON"
                                value="Join Now"
                            ></input>
                            <div className="grid gap-x-6 md:gap-8">
                                <div className="grid gap-x-6 md:gap-5 grid-cols-1 md:grid-cols-2">
                                    <div className="lg:mb-2 mb-4">
                                        <Input
                                            name="FIRSTNAME"
                                            label="Name"
                                            placeholder="First Name"
                                            required
                                            borderedInput
                                        />
                                    </div>
                                    <div className="lg:mb-2 mb-4">
                                        <Input
                                            // hideLabel
                                            hideLabel
                                            hideStar={true}
                                            name="LASTNAME"
                                            placeholder="Last Name"
                                            required
                                            borderedInput
                                        />
                                    </div>
                                </div>
                                <div className="lg:mb-2 mb-4">
                                    <Input
                                        // {...register('CONTACT_EMAIL')}
                                        name="CONTACT_EMAIL"
                                        type="email"
                                        // label={'Email'}
                                        label={'Work Email'}
                                        required
                                        // placeholder="Enter email id"
                                        placeholder="Work Email id"
                                        borderedInput
                                    />
                                </div>
                                <div className="lg:mb-2 mb-4">
                                    <Input
                                        name="CONTACT_CF1"
                                        // label="Industry"
                                        label="Company Name"
                                        // placeholder="Enter industry type"
                                        placeholder="Company Name"
                                        required
                                        borderedInput
                                    />
                                </div>
                                <div className="lg:mb-2 mb-4">
                                    <Select
                                        name="CONTACT_CF3"
                                        label="Department"
                                        // label="Department"
                                        options={departmentOptions}
                                        // placeholder="Select your department"
                                        placeholder="Department"
                                        required
                                        borderedInput
                                    />
                                </div>
                            </div>
                            <Button
                                type="submit"
                                className="w-full mt-5 md:mt-10"
                                suffix={<LineArrow />}
                            >
                                SUBSCRIBE
                            </Button>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </>
    )

}

export default PopupSubscribeForm 