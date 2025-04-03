import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'

export const TOC = ({ type, lenis, isRoot = false, isActive,toc,settoc,...props }) => {
  if (type === 'link')
  return (
<Link
        onClick={(e) => {
          e.preventDefault()
          lenis?.scrollTo(props?.href)
          settoc(!toc)
        }}
        href={props?.href}
        className={
          isActive(String(props?.href).replace('#', '')) ? 'active' : ''
        }
      >
        {props?.text}
      </Link>
    )

  const Wrapper = isRoot ? Fragment : 'div'
  const wProps = isRoot ? {} : { className: type == 'list' ? 'pl-2' : '' }
  return (
    <Wrapper {...wProps}>
      {props?.children?.map((c, i) => (
        <TOC key={i} {...c} isActive={isActive} lenis={lenis} toc={toc} settoc={settoc} />
      ))}
    </Wrapper>
  )
}
