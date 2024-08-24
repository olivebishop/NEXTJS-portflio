'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { projects } from '../../utils'

const DynamicProjectCard = dynamic(() => import('../../components/ProductCard'), { ssr: false })

export default function Projects() {
    const [isClient, setIsClient] = useState(false)

    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-32 md:mt-40">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
                Projects
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {isClient && projects.map((project, index) => (
                    <DynamicProjectCard key={index} project={project} />
                ))}
            </div>
        </div>
    )
}
