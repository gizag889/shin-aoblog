import Layout from "../Layout";

export default function Home() {
    return (
        <Layout>
            <div className='pt-6 mx-auto lg:max-w-screen-lg'>
                <div className='flex gap-10 items-start'>
                    <div className='grid grid-cols-2 gap-4'>
                        {/* {postList.map((post) => {
                            return (
                                <PostBox post={post} />
                                
                            )
                            })}   
                        </div>
                        <AboutBox></AboutBox> */}
                    </div>
                </div>
            </div>
        </Layout>
    )
}