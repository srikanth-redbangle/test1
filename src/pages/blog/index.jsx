import { LineArrow } from '@/components/icons'
import { LineHeading, NewsletterField, SEO } from '@/components/shared'
import { ContentPostCard } from '@/components/shared/Cards'
import GetUpdates from '@/components/shared/sections/GetUpdatesSection/GetUpdates'
import { ArrowButton, Button } from '@/components/ui'
import React, { useEffect, useState } from 'react'
import { getBlogs } from '@/utils/graphql'
import { formatBlogPosts } from '@/utils/formate'
import { blogSchema } from '@/components/schema/blog-schema'
import Script from 'next/script'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Dropdown } from '@/components/dropdown/dropdown'

const PAGE_LIMIT = 50
const Articles = ({ featuredPost, posts: { edges, pageInfo }, setisPopupOpen }) => {


  

  const [state, setState] = useState({
    pageInfo: {
      endCursor: pageInfo.endCursor,
      hasNextPage: pageInfo.hasNextPage,
    },
    posts: edges,
  })


  const loadMore = async () => {
    const {
      data: { posts },
    } = await getBlogs(state.pageInfo.endCursor, PAGE_LIMIT)
    setState((prev) => ({
      ...posts,
      posts: [...prev.posts, ...formatBlogPosts(posts?.edges)],
    }))
  }

  useEffect(() => {
    loadMore()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      setisPopupOpen(true);
    }, 10000);

  }, [])


  // Separate posts with the 'SEO Blogs' category and without //
  const { techPosts, otherPosts } = state.posts.reduce(
    (result, post) => {
      const { categories } = post;

      if (categories.some((c) => c.name === 'SEO Blogs')) {
        result.techPosts.push(post);
      } else {
        result.otherPosts.push(post);
      }

      return result;
    },
    { techPosts: [], otherPosts: [] }
  );

  // Concatenate the arrays to display 'SEO Blogs' posts last
  const allPosts = otherPosts.concat(techPosts);
  const [visiblePosts, setVisiblePosts] = useState(6); // Initial number of visible posts

  useEffect(() => {
    const blogInd = sessionStorage.getItem('blogInd')
    if (blogInd) {
      setVisiblePosts(blogInd)
    }
  }, [])
  const totalPosts = allPosts.length;

  const loadMorePosts = () => {
    const nextVisiblePosts = visiblePosts + 6;
    setVisiblePosts(Math.min(nextVisiblePosts, totalPosts));
    sessionStorage.setItem('blogInd', Math.min(nextVisiblePosts, totalPosts))
  };

  const router = useRouter();
  const { category } = router.query;
  

  useEffect(() => {
    const handlePopState = (event) => {
      setSelectedCategory('Select Category');
    };
  
    if(category === undefined ){
      window.addEventListener('popstate', handlePopState);
    }
    
  }, [])

  let categoryOptions = allPosts
  .flatMap(item => item.categories)
  .filter((category, index, self) =>
    index === self.findIndex((c) => c.slug === category.slug)
  )
  

  const initialCategory = categoryOptions && categoryOptions.find( obj => obj.description === category);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory?.slug);
  //after selecting categories
  const handleCategoryChange = (category) => {
    if(category.slug === 'all-blogs'){
      router.push(`/blog`, undefined, { shallow: true,})
      setSelectedCategory(category?.slug);
    }

    if (category && category.slug !== 'all-blogs') {
      router.push(`/blog?category=${(category.description)}`, undefined, {
        shallow: true,
      })
    }
  }
  
  useEffect(() => {   
    if (initialCategory) {
      setSelectedCategory(initialCategory?.slug);
    }
  }, [category]);

  const filteredPosts = (category && category !== "all-blogs")
    ? allPosts.filter(post => post.categories.some(cat => cat.slug === selectedCategory))
    : allPosts;

  return (
    <>
      <SEO
        title="Red Bangle Blog | Insights & Trends in Holistic Marketing Communication, Integrated Marketing Campaigns, Branded Marketing Content"
        description="Stay updated with the latest trends in integrated brand content, holistic marketing communication, integrated marketing campaigns and creative advertising. Explore expert insights, tips, and industry news on the Red Bangle Blog."
        url="https://www.redbangle.com/marketing-blogs-brand-content-resources"
      />
      <section className="bg-rb-mercury py-23">
        <div className="container">
          <h1 className="font-everett text-[32px] md:text-[64px] xl:text-[120px] font-normal mb-8 md:mb-18 leading-[100%]">
            BLOGS &amp; ARTICLES
          </h1>

          <div className="flex flex-wrap lg:flex-nowrap gap-8 items-center mb-13 border-b border-b-rb-davy-grey pb-13">
            <p className="flex-1 md:text-[32px] font-semibold tracking-[-1.28px] mb-0">
              Discover the latest trends in content and culture. Gain valuable
              insights to keep your brand ahead of the game.
            </p>

            <NewsletterField />
          </div>

          <div>
            <a
              href={
                featuredPost?.primaryCategory
                  ? `/blog/${featuredPost?.slug}?category=${featuredPost?.categories?.find(cat => cat.name ===  featuredPost?.primaryCategory)?.description}`
                  : `/blog/${featuredPost?.slug}`
              }
              className="grid md:grid-cols-2 gap-6 items-center"
            >
              <div>
                <div className="h-[315px] overflow-hidden relative">
                  <img
                    {...featuredPost?.featuredImage}
                    src={featuredPost?.featuredImage.src}
                    className="w-full h-full object-cover hover:scale-110 duration-500"
                    alt=""
                  />

                  {/* {featuredPost?.categories?.slice(0, 1).map((c) => (
                    <div
                      key={c.slug}
                      className="absolute border border-white rounded-full py-2 px-4 text-[12px] font-semibold bottom-5 left-5 text-white capitalize"
                    >
                      {c.name}
                    </div>
                  ))} */}

                  {featuredPost?.categories?.filter((c) =>
                    featuredPost?.primaryCategory
                      ? c.name === featuredPost.primaryCategory
                      : c === featuredPost.categories[0]
                  )
                    .map((c) => (
                      <div
                        key={c.slug}
                        className="absolute border border-white rounded-full py-2 px-4 text-[12px] font-semibold bottom-5 left-5 text-white capitalize bg-black bg-opacity-25"
                      >
                        {c.name}
                      </div>
                    ))}
                </div>
              </div>

              {/* </div> */}

              <div>
                <div className="flex gap-2 mb-4">
                  <span className="text-[14px] md:text-[16px]">
                    {featuredPost?.date}
                  </span>
                  <span className="text-[14px] md:text-[16px]">|</span>
                  <span className="text-[14px] md:text-[16px]">
                    {featuredPost?.author}
                  </span>
                </div>

                <h3 className="text-[26px] md:text-[32px] leading-[120%] font-semibold mb-4 tracking-[-1.28px]">
                  {featuredPost?.title}
                </h3>

                <div
                  dangerouslySetInnerHTML={{ __html: featuredPost?.excerpt }}
                  className="mb-10"
                ></div>

                <div className="inline-flex gap-2 items-center text-rb-red font-semibold">
                  Continue reading
                  <LineArrow className=" max-w-[20px]" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <LineHeading className="mb-6 md:mb-9">Discover more</LineHeading>

          <h2 className="text-title md:text-title-md mb-8 font-everett">
            Explore the latest blogs and articles
          </h2>

          <div>
            <Dropdown
              placeholder={selectedCategory && selectedCategory !== 'all-blogs' ? selectedCategory : 'Select Category'}
              options={categoryOptions}
              onChange={handleCategoryChange} // Handle the value change
            />
          </div>

          <div id='discover' className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 pt-8">
            {filteredPosts.slice(0, visiblePosts).map(({ date, author, featuredImage, primaryCategory, slug, categories, title }) => (

              <div key={slug}>
                <a
                  href={`/blog/${slug}?category=${category === undefined ? categories.find(cat => cat.name === primaryCategory)?.description : category}`}
                  className="h-[384px] block md:h-[272px] overflow-hidden relative mb-4"
                >
                  <img
                    alt=""
                    {...featuredImage}
                    src={featuredImage.src}
                    className="w-full h-full object-cover hover:scale-110 duration-500"
                  />
                  {categories.some(category => category.name.includes('SEO Blogs')) ?
                    <div
                      className="absolute capitalize border border-white rounded-full py-2 px-4 text-[12px] font-semibold bottom-5 left-5 text-white"
                    >
                      SEO Blogs
                    </div>
                    :
                    (categories[0].name == 'Uncategorized' ?
                      null
                      :
                      <div
                        className="absolute capitalize border border-white rounded-full py-2 px-4 text-[12px] font-semibold bottom-5 left-5 text-white bg-black bg-opacity-25"
                      >
                        {primaryCategory}

                        {/* {categories[0].name} */}
                      </div>)
                  }

                </a>
                <a
                  href={`/blog/${slug}`}>
                  <div className='lg:relative h-28 lg:h-[132px] lg:mb-5'>
                    <div className="flex gap-2 mb-4">
                      <span className="text-[14px] md:text-[16px]">{date}</span>
                      <span className="text-[14px] md:text-[16px]">|</span>
                      <span className="text-[14px] md:text-[16px]">{author}</span>
                    </div>

                    <h3 className="text-[22px] md:text-[24px] leading-[120%] font-semibold mb-[22px] lg:mb-4 tracking-[-0.96px] line-clamp-2">
                      {title}
                    </h3>

                    <div
                      // href={`/blog/${slug}`}
                      className="inline-flex gap-2 items-center text-rb-red font-semibold lg:absolute bottom-0 left-0"
                    >
                      Continue reading
                      <LineArrow className=" max-w-[20px]" />
                    </div>

                  </div>
                </a>
              </div>
            ))}
          </div>


          {visiblePosts < totalPosts && (
            <Button
              className="w-full md:w-fit mx-auto mt-[30px] md:mt-12 focus:outline-none"
              onClick={loadMorePosts}
              suffix={<LineArrow />}
            >
              SEE MORE

            </Button>
          )}
          {visiblePosts >= totalPosts && (
      //  <Link href={'#discover'}>
              <Button
                className="w-full md:w-fit mx-auto mt-[30px] md:mt-12"
                onClick={() => {
                  setVisiblePosts(6)
                  sessionStorage.setItem('blogInd', 6)
                }}
                suffix={<LineArrow />}
              >
                SEE LESS
              </Button>
            // </Link>
          )}

          {/* <div className="pt-16 text-center">
            {state?.pageInfo?.hasNextPage && (
              <Button
                className="!inline-flex"
                intent="p-secondary"
                onClick={loadMore}
              >
                View All
              </Button>
            )}
          </div> */}
        </div>
      </section>

      <GetUpdates />
      <Script id="schema" type="application/ld+json">
        {JSON.stringify(blogSchema)}
      </Script>
    </>
  )
}
export async function getStaticProps() {
  const {
    data: { posts },
  } = await getBlogs(null, PAGE_LIMIT)
  const formatedPosts = formatBlogPosts(posts?.edges)
  const featuredPost = formatedPosts.shift()
  return {
    props: {
      featuredPost,
      posts:
        {
          ...posts,
          edges: formatedPosts,
        } ?? null,
    },
  }
}
export default Articles




