import React, { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import Split from "react-split";
import { useNavigate } from "react-router-dom";
import { 
  Box, 
  Typography, 
  Button, 
  Select, 
  MenuItem, 
  FormControl,
  InputLabel,
  Container,
  Paper,
  IconButton,
  Alert,
  CircularProgress
} from "@mui/material";
import { ContentCopy, PlayArrow, Code, Brightness4 } from "@mui/icons-material";

const CodeConverter = () => {
  const [sourceCode, setSourceCode] = useState("");
  const [convertedCode, setConvertedCode] = useState("");
  const [sourceLang, setSourceLang] = useState("python");
  const [targetLang, setTargetLang] = useState("c");
  const [error, setError] = useState("");
  const [editorTheme, setEditorTheme] = useState("vs-dark");
  const [loading, setLoading] = useState(false);
  const targetEditorRef = useRef(null);
  const navigate = useNavigate();

  // const handleConvert = async () => {
  //   if (!sourceCode) {
  //     setError("Please enter code to convert");
  //     return;
  //   }
  //   setError("");
  //   setLoading(true);

  //   try {
  //     const response = fetch(`${process.env.REACT_APP_API_URL}/api/convert/`,{
  //     // const response = await fetch("http://127.0.0.1:8000/api/convert/", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         source_lang: sourceLang,
  //         target_lang: targetLang,
  //         code: sourceCode,
  //       }),
  //     });

  //     const data = await response.json();
  //     if (response.ok) {
  //       setConvertedCode(data.converted_code);
  //     } else {
  //       setError(data.error || "Conversion failed");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //     setError("Server error - please try again");
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  const handleConvert = async () => {
  if (!sourceCode) {
    setError("Please enter code to convert");
    return;
  }

  setError("");
  setLoading(true);

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/convert/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source_lang: sourceLang,
        target_lang: targetLang,
        code: sourceCode,
      }),
    });

    // ✅ parse only after await
    const data = await response.json();

    if (response.ok) {
      setConvertedCode(data.converted_code);
    } else {
      setError(data.error || "Conversion failed");
    }
  } catch (err) {
    console.error("Fetch error:", err);
    setError("Server error - please try again later");
  } finally {
    setLoading(false);
  }
};


  const copyToClipboard = () => {
    if (convertedCode) {
      navigator.clipboard.writeText(convertedCode);
      setError("");
    }
  };

const languages = [
  { value: "python", label: "Python" },
  { value: "javascript", label: "JavaScript" },
  { value: "java", label: "Java" },
  { value: "c", label: "C" },
  { value: "cpp", label: "C++" },
  { value: "csharp", label: "C#" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "ruby", label: "Ruby" },
  { value: "php", label: "PHP" },
  { value: "swift", label: "Swift" },
  { value: "kotlin", label: "Kotlin" },
  { value: "typescript", label: "TypeScript" },
  { value: "r", label: "R" },
  { value: "matlab", label: "MATLAB" },
  { value: "julia", label: "Julia" },
  { value: "perl", label: "Perl" },
  { value: "scala", label: "Scala" },
  { value: "dart", label: "Dart" },
  { value: "elixir", label: "Elixir" },
  { value: "haskell", label: "Haskell" },
  { value: "clojure", label: "Clojure" },
  { value: "erlang", label: "Erlang" },
  { value: "lua", label: "Lua" },
  { value: "groovy", label: "Groovy" },
  { value: "pascal", label: "Pascal" },
  { value: "fortran", label: "Fortran" },
  { value: "cobol", label: "COBOL" },
  { value: "assembly", label: "Assembly" },
  { value: "objectivec", label: "Objective-C" },
  { value: "actionscript", label: "ActionScript" },
  { value: "coffeescript", label: "CoffeeScript" },
  { value: "elm", label: "Elm" },
  { value: "reason", label: "Reason" },
  { value: "crystal", label: "Crystal" },
  { value: "nim", label: "Nim" },
  { value: "zig", label: "Zig" },
  { value: "ada", label: "Ada" },
  { value: "lisp", label: "Lisp" },
  { value: "scheme", label: "Scheme" },
  { value: "racket", label: "Racket" },
  { value: "smalltalk", label: "Smalltalk" },
  { value: "forth", label: "Forth" },
  { value: "prolog", label: "Prolog" },
  { value: "ocaml", label: "OCaml" },
  { value: "fsharp", label: "F#" },
  { value: "vbnet", label: "VB.NET" },
  { value: "bash", label: "Bash" },
  { value: "powershell", label: "PowerShell" },
  { value: "shell", label: "Shell" }
];

  return (
    <Box sx={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 50%, #2D2D2D 100%)',
      padding: 0,
      margin: 0
    }}>
      {/* Header */}
      <Box sx={{ 
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        py: 2,
        px: 4
      }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box 
              sx={{ display: 'flex', alignItems: 'center', gap: 2, cursor: 'pointer' }}
              onClick={() => navigate('/')}
            >
              <Code sx={{ fontSize: 32, color: '#00D4FF' }} />
<Typography 
  variant="h4" 
  sx={{ 
    fontWeight: 'bold',
    background: 'linear-gradient(45deg, #00D4FF, #0099FF)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    padding: '4px 8px',
    borderRadius: '8px',
    border: '2px solid transparent',
    '&:hover': {
      border: '2px solid #00D4FF',
    },
    transition: 'all 0.3s ease'
  }}
>
  CodeGen.ai
</Typography>
            </Box>
            <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              AI-Powered Code Converter
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ py: 3 }}>
        {/* Error Alert */}
        {error && (
          <Alert severity="error" sx={{ mb: 3, bgcolor: 'rgba(211,47,47,0.1)' }}>
            {error}
          </Alert>
        )}

        <Split
          className="split-container"
          sizes={[50, 50]}
          minSize={200}
          gutterSize={10}
          gutterAlign="center"
          snapOffset={30}
          dragInterval={1}
          cursor="col-resize"
          style={{ 
            display: 'flex', 
            height: '75vh',
            borderRadius: '8px',
            overflow: 'hidden'
          }}
        >
          {/* Left Editor */}
          <Paper 
            elevation={0}
            sx={{ 
              background: 'rgba(30, 30, 30, 0.8)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '8px 0 0 8px',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ 
              p: 2, 
              background: 'rgba(0, 0, 0, 0.3)',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <FormControl size="small" sx={{ minWidth: 200 }}>
                <InputLabel sx={{ color: 'rgba(255,255,255,0.7)' }}>Source Language</InputLabel>
                <Select
                  value={sourceLang}
                  onChange={(e) => setSourceLang(e.target.value)}
                  label="Source Language"
                  sx={{
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255,255,255,0.3)'
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00D4FF'
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00D4FF'
                    }
                  }}
                >
                  {languages.map((lang) => (
                    <MenuItem key={lang.value} value={lang.value}>
                      {lang.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Editor
                height="100%"
                language={sourceLang}
                value={sourceCode}
                onChange={(value) => setSourceCode(value)}
                theme="vs-dark"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                  automaticLayout: true
                }}
              />
            </Box>
          </Paper>

          {/* Right Editor - With Light Theme Toggle */}
          <Paper 
            elevation={0}
            sx={{ 
              background: 'rgba(30, 30, 30, 0.8)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '0 8px 8px 0',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <Box sx={{ 
              p: 2, 
              background: 'rgba(0, 0, 0, 0.3)',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <FormControl size="small" sx={{ minWidth: 200 }}>
                <InputLabel sx={{ color: 'rgba(255,255,255,0.7)' }}>Target Language</InputLabel>
                <Select
                  value={targetLang}
                  onChange={(e) => setTargetLang(e.target.value)}
                  label="Target Language"
                  sx={{
                    color: 'white',
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'rgba(255,255,255,0.3)'
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00D4FF'
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      borderColor: '#00D4FF'
                    }
                  }}
                >
                  {languages.map((lang) => (
                    <MenuItem key={lang.value} value={lang.value}>
                      {lang.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {/* Light Theme Toggle Button */}
                <IconButton 
                  sx={{
                    color: editorTheme === 'vs' ? '#FFD700' : 'rgba(255,255,255,0.7)',
                    '&:hover': {
                      bgcolor: 'rgba(0, 212, 255, 0.1)'
                    }
                  }}
                  onClick={() => {
                    setEditorTheme(editorTheme === 'vs-dark' ? 'vs' : 'vs-dark');
                  }}
                >
                  <Brightness4 />
                </IconButton>
                
                {/* Copy Icon - Always Visible */}
                <IconButton 
                  onClick={copyToClipboard}
                  disabled={!convertedCode}
                  sx={{
                    color: convertedCode ? '#00D4FF' : 'rgba(255,255,255,0.3)',
                    '&:hover': {
                      bgcolor: 'rgba(0, 212, 255, 0.1)'
                    }
                  }}
                >
                  <ContentCopy />
                </IconButton>
              </Box>
            </Box>
            <Box sx={{ flex: 1, position: 'relative' }}>
              {/* Loading Overlay */}
              {loading && (
                <Box sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  zIndex: 10
                }}>
                  <CircularProgress 
                    size={60} 
                    sx={{ color: '#00D4FF' }} 
                  />
                </Box>
              )}
              <Editor
                height="100%"
                language={targetLang}
                value={convertedCode}
                onMount={(editor) => (targetEditorRef.current = editor)}
                theme={editorTheme}
                options={{
                  readOnly: true,
                  minimap: { enabled: false },
                  fontSize: 14,
                  lineNumbers: 'on',
                  scrollBeyondLastLine: false,
                  automaticLayout: true
                }}
              />
            </Box>
          </Paper>
        </Split>

        {/* Convert Button */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mt: 3 
        }}>
          <Button
            variant="contained"
            onClick={handleConvert}
            disabled={!sourceCode || loading}
            startIcon={loading ? <CircularProgress size={20} sx={{ color: 'white' }} /> : <PlayArrow />}
            sx={{
              py: 1.5,
              px: 4,
              background: loading 
                ? 'rgba(255,255,255,0.1)' 
                : 'linear-gradient(45deg, #00D4FF, #0099FF)',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              borderRadius: 3,
              minWidth: '200px',
              '&:hover': {
                background: loading 
                  ? 'rgba(255,255,255,0.1)' 
                  : 'linear-gradient(45deg, #0099FF, #0066FF)',
                transform: loading ? 'none' : 'translateY(-2px)',
                boxShadow: loading ? 'none' : '0 8px 25px rgba(0, 212, 255, 0.3)'
              },
              '&:disabled': {
                background: 'rgba(255,255,255,0.1)',
                color: 'rgba(255,255,255,0.3)'
              },
              transition: 'all 0.3s ease'
            }}
          >
            {loading ? 'Converting...' : 'Convert Code'}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CodeConverter;