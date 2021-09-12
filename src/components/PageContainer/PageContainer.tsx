import { ReactNode } from 'react'

import styles from './PageContainer.module.scss'

type PageContainerProps = {
	pageId: string
	children: ReactNode
}

const PageContainer = ({ pageId, children }: PageContainerProps) => {
	return (
		<div id={pageId} className={styles.root} data-testid={pageId}>
			<div className={styles.content}>{children}</div>
		</div>
	)
}

export default PageContainer
