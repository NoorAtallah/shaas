'use client'
import AdminShell from '../../components/admin/AdminShell'
import PostEditor from '../../components/admin/PostEditor'
import { emptyPost } from '../../components/admin/emptyPost'
export default function NewPost() {
  return <AdminShell><PostEditor mode="create" initial={emptyPost()} /></AdminShell>
}
