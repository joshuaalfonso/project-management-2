import { Box } from "@chakra-ui/react"
import { useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import TextAlign from "@tiptap/extension-text-align"
import { TextStyleKit } from "@tiptap/extension-text-style"
import Subscript from "@tiptap/extension-subscript"
import Superscript from "@tiptap/extension-superscript"
import { Control, RichTextEditor } from "@/components/ui/rich-text-editor"



type TiptapEditorProps = {
  value?: any
  onChange: (value: any) => void
}

function TiptapEditor({ value, onChange }: TiptapEditorProps) {

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        link: { openOnClick: false },
      }),
      TextStyleKit,
      TextAlign.configure({
        types: ["paragraph", "heading"],
      }),
      Subscript,
      Superscript,
    ],
    content:
      value ??
      `<h1>Welcome to Strive!</h1><p>Edit using the toolbar below...</p>`,
    immediatelyRender: false,
    shouldRerenderOnTransaction: true,
    onUpdate: ({ editor }) => {
    //   onChange(editor.getJSON())
    const html = editor.getHTML()
      if (onChange) {
        onChange(html)
      } 
    },
  })

  if (!editor) return null

  return (
    <Box border="0px solid" borderColor="gray.200" p={0} borderRadius="md">
      <RichTextEditor.Root editor={editor}>
        <RichTextEditor.Toolbar>
          <RichTextEditor.ControlGroup>
            <Control.FontFamily />
            <Control.FontSize />
          </RichTextEditor.ControlGroup>

          <RichTextEditor.ControlGroup>
            <Control.Bold />
            <Control.Italic />
            <Control.Underline />
            <Control.Strikethrough />
            <Control.Code />
            {/* <Control.Subscript />
            <Control.Superscript /> */}
          </RichTextEditor.ControlGroup>

          <RichTextEditor.ControlGroup>
            <Control.BulletList />
            <Control.OrderedList />
            <Control.Blockquote />
          </RichTextEditor.ControlGroup>

          <RichTextEditor.ControlGroup>
            <Control.H1 />
            <Control.H2 />
            <Control.H3 />
            <Control.H4 />
          </RichTextEditor.ControlGroup>

          <RichTextEditor.ControlGroup>
            <Control.AlignLeft />
            <Control.AlignCenter />
            <Control.AlignRight />
            <Control.AlignJustify />
          </RichTextEditor.ControlGroup>
        </RichTextEditor.Toolbar>

        <RichTextEditor.Content />
      </RichTextEditor.Root>
    </Box>
  )
}

export default TiptapEditor
