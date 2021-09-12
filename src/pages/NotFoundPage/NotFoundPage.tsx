import { APP_PAGES } from 'utils/consts'

import styles from './NotFoundPage.module.scss'
import PageContainer from 'components/PageContainer/PageContainer'

const NotFoundPage = () => {
	return (
		<PageContainer pageId={APP_PAGES.NOTFOUND.id}>
			<div className={styles.root}>
				<div
					className={styles.title}
					data-testid={`${APP_PAGES.NOTFOUND.id}-title`}
				>
					You reached the end of the Universe
				</div>
			</div>
		</PageContainer>
	)
}

export default NotFoundPage
