import NavLink from 'umi/navlink';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';

// 更多配置请移步 https://github.com/icd2k3/react-router-breadcrumbs-hoc
const routes = [
    { path: '/', breadcrumb: '首页' },
    { path: '/organization', breadcrumb: '组织机构' },
    { path: '/meeting', breadcrumb: '会议日程' },
    { path: '/report', breadcrumb: '会议报告' },
    { path: '/report/conference', breadcrumb: '大会报告' },
    { path: '/report/invitation', breadcrumb: '邀请报告' },
    { path: '/report/post', breadcrumb: '张贴报告' },
    { path: '/theme', breadcrumb: '会议主题' },
    { path: '/info', breadcrumb: '酒店交通' },
    { path: '/info/hotel', breadcrumb: '酒店信息' },
    { path: '/info/traffic', breadcrumb: '交通信息' },
    { path: '/previous', breadcrumb: '历届会议' },
    { path: '/sponsorship', breadcrumb: '赞助信息' },
    { path: '/contact', breadcrumb: '联系我们' },
    { path: '/photo', breadcrumb: '大会照片' },
];

export default withBreadcrumbs(routes)(({ breadcrumbs }) => (
    <div>
        {breadcrumbs.length > 1 ? breadcrumbs.map(({
            match,
            breadcrumb
        }, index) => (
                <span key={match.url}>
                    <NavLink to={match.url}>
                        {breadcrumb}
                    </NavLink>
                    {(index < breadcrumbs.length - 1) && <i> / </i>}
                </span>
            )) : null}
    </div>
));
